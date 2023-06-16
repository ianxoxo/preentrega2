import React from 'react';
import { CartContext } from '../../context/Context';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
    const {cart, deleteCart, total, totalQty} = useContext(CartContext);

    if(totalQty === 0){
        return ( 
            <div className="container">
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>Ver Productos</Link>
            </div>
        )
    }
    return (
        <div className="container cart-flex">
                {cart.map(product => <CartItem key={product.id} {...product}></CartItem>)}
                <hr />
                <div className="total">
                    <h3>Total</h3>
                    <p>${total}</p>
                </div>
                <div className="buttons">
                    <button onClick={() => deleteCart()}>Vaciar carrito</button>
                    <Link to='/checkout'>Finalizar compra</Link>
                </div>
        </div>
    )
}

export default Cart