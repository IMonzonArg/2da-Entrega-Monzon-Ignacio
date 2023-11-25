import React, { useState, useEffect } from 'react';
import './itemDetailContainer.css';
import ItemDetail from '../itemDetail/itemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import db from '../Firebase/firebaseconfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'catalogo', id);

        getDoc(docRef)
            .then((response) => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div className='itemDetailContainer'>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
