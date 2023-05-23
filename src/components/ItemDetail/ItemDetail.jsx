import React from 'react'

const ItemDetail = ({title, price, id, img}) => {
  return (
    <div className="container">
        <h2>Nombre: {title}</h2>
        <h3>Precio: {price}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <img src= {img} alt= {title} />
    </div>
  )
}

export default ItemDetail