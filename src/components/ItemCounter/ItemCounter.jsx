import React from 'react';
import { useState, useEffect } from 'react';
import './ItemCounter.css';

const ItemCounter = ({max}) => {
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState('black')
   // entre los paréntesis del hook necesito pasarle el valor inicial del estado
   // retorna un array con dos elementos: el primero es el estado, el segundo es una función que me actualiza el valor del estado

  useEffect(() => {
    (counter > 5) ? setColor('#9f3c3c') : setColor('#f2f2f2');
  }, [counter])

   //FUNCIONES PARA LOS EVENTOS

  const add = () => {
    (counter < max) ? setCounter(counter + 1) : null;
  } 

  const remove = () => {
    (counter > 1) ? setCounter(counter - 1) : null;
  }

  return (
    <div className="container flex_button" >
      <button onClick={remove}> - </button>
      <p style={{color:color}}>{counter}</p>
      <button onClick={add}> + </button>
    </div>
  )
}

export default ItemCounter