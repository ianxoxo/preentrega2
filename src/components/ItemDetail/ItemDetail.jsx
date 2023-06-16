import React from 'react';
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import ItemCounter from '../ItemCounter/ItemCounter';
import './ItemDetail.css';
import { CartContext } from '../../context/Context';

const ItemDetail = ({title, price, id, img, stock}) => {
  const [q, setQ] = useState(0);

  const {addProducts} = useContext(CartContext)

  const qHandler = (q) => {
    setQ(q);
    const item = {id, title, price};
    addProducts(item, q);
  }
  
  return (
    <div className="container detail">
        <h2>{title}</h2>
        <h3>{price} USD</h3>
        {
          q > 0 ? (<Link className="link" to="/cart">Terminar compra</Link>) : (<ItemCounter inicial={1} stock={stock} funcionAgregar={qHandler}></ItemCounter>)
        }
    </div>
  )
}

export default ItemDetail