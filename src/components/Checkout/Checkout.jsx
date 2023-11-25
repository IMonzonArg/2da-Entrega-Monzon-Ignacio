import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import db from '../Firebase/firebaseconfig';
import { getDocs, query, } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart,
                total: total,
                date: new Date(),
            };

            const batch = db.batch();

            const outOfStock = [];

            const ids = cart.map((prod) => prod.id);

            const productsRef = db.collection('products');

            const productsAddedFromFirestore = await getDocs(
                query(productsRef.where('id', 'in', ids))
            );

            productsAddedFromFirestore.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    const productRef = productsRef.doc(doc.id);
                    batch.update(productRef, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = db.collection('orders');

                const orderAdded = await orderRef.add(objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.log('Productos sin stock:', outOfStock);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El ID de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;
