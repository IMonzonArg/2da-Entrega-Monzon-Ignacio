import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const Increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const Decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={Decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={Increment}>+</button>
            </div>
            <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount;
