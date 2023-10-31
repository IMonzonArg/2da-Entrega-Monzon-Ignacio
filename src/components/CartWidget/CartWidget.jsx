import React from 'react';
import Cart from '../../assets/shopping-cart-outline-svgrepo-com.svg'
import '../CartWidget/Cartwidget.css';

const CartWidget = () => {
  return (
    <div>
      <img src={Cart} alt="cart-widget" />
      0
    </div>
  );
};

export default CartWidget;
