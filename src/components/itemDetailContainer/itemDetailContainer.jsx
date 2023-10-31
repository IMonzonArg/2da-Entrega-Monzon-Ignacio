import React from 'react'
import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../AsyncMock/asyncMock'
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [products,setProducts] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response=>{
            setProducts(response);
        })
        .catch(error => {
            console.log(error);
        })
    }, [itemId])

  return (
    <div className='itemDetailContainer'>
        <ItemDetail {...products}/>
    </div>
  )
}

export default ItemDetailContainer