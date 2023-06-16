import React from 'react';
import cart from '../../assets/cart.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/Context';
import { useContext } from 'react';

const CartWidget = () => {
  const {totalQty} = useContext(CartContext);


  return (
    <Link to="/cart" className="img__container">
        <img src={cart} alt="Shopping Bag" />
        {
          totalQty > 0 && <span className="counter">{totalQty}</span>
        }
    </Link>
  )
}

export default CartWidget