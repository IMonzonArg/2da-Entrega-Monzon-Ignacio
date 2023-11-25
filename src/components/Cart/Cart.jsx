import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../Firebase/firebaseconfig';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    const getProductDetails = async (id) => {
        try {
            const productDocRef = doc(db, 'products', id);
            const productDocSnap = await getDoc(productDocRef);
            if (productDocSnap.exists()) {
                const data = productDocSnap.data();
                console.log('Product details:', data);
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching document:', error);
        }
    };

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay nada en el carrito</h1>
                <Link to="/" className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(item => (
                <CartItem key={item.id} {...item} getProductDetails={getProductDetails} />
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'> Limpiar Carrito</button>
            <Link to="/checkout" cnplassName='Option'>CheckOut</Link>
        </div>
    );
}

export default Cart;
