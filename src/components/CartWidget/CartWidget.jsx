import React from 'react';
import cart from '../../assets/cart.png';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="img__container">
        <img src={cart} alt="Shopping Bag" />
        <span className="counter">0</span>
    </div>
  )
}

export default CartWidget