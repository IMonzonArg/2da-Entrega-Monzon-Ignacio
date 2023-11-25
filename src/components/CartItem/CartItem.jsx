import React from 'react';

const CartItem = ({ id, title, price, quantity }) => {
    return (
        <div className='CartItem'>
            <div className='CartItem__info'>
                <h3>{title}</h3>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;