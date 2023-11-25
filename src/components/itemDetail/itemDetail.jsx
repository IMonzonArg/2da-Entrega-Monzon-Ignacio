import React, { useState, useContext, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './itemDetail.css';
import { CartContext } from '../../components/context/CartContext';
import { doc, getDoc } from 'firebase/firestore';
import db from '../Firebase/firebaseconfig';

const ItemDetail = ({ id, nombre, tipo, precio, stock, imagen }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // Use docSnap.data() to access the document data
          const data = docSnap.data();
          console.log('Document data:', data);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      nombre,
      precio,
    };

    addItem(item, quantity);
  };

  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>
          {nombre}
        </h2>
      </header>
      <picture>
        <img src={imagen} alt={nombre} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>
          Precio: ${precio}
        </p>
        <p className='Info'>
          Stock disponible: {stock}
        </p>
        <p className='Tipo'>
          Tipo: {tipo}
        </p>
      </section>
      <footer className='ItemFooter'>
        {
          quantityAdded > 0 ? (
            <Link to='/cart' className='Option'>Terminar compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </footer>
    </article>
  );
};

export default ItemDetail;
