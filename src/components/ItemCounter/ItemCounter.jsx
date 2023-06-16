import React from 'react';
import { useState, useEffect } from 'react';
import './ItemCounter.css';

const ItemCounter = ({inicial, stock, funcionAgregar}) => {
  const [counter, setCounter] = useState(1);

  const add = () => {
    (counter < stock) ? setCounter(counter + 1) : null;
  } 

  const remove = () => {
    (counter > inicial) ? setCounter(counter - 1) : null;
  }

  return (
    <div>
      <div className="container flex_button">
        <button onClick={remove}> - </button>
        <p>{counter}</p>
        <button onClick={add}> + </button>
      </div>
      <button className="btn2" onClick={() => funcionAgregar(counter)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter