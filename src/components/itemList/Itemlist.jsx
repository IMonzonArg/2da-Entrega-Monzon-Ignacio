import React from 'react'
import Item from '../Item/item'

const ItemList = ({products}) => {
  return (
    <div className='listGroup'>
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList