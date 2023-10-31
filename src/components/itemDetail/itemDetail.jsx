import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({ id, nombre, tipo, precio, stock, imagen, graduacion, origen }) => {
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
        <p className='Info'>
          Graduación alcohólica: {graduacion}
        </p>
        <p className='Info'>
          Origen: {origen}
        </p>
      </section>
      <footer className='ItemFooter'>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
      </footer>
    </article>
  )
}

export default ItemDetail
