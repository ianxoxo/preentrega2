import { useState, useContext } from "react";
import { CartContext } from "../../context/Context";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css';

export default function Checkout() {
  const { cart, deleteCart, total } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailAuth, setEmailAuth] = useState("");
  const [err, setErr] = useState("");
  const [orderId, setOrderId] = useState("");

  const formHandler = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailAuth) {
      setErr("Por favor, complete todos los campos.")
      return;
    }

    if (email !== emailAuth) {
      setErr("Error: El email que introdujo no coincide.");
      return;
    }

    const order = {
      items: cart.map(producto => ({
        id: producto.item.id,
        title: producto.item.title,
        qty: producto.qty
      })),
      total: cart.reduce((totalCart, producto) => totalCart + producto.item.price * producto.qty, 0),
      nombre,
      apellido,
      telefono,
      email
    }

    addDoc(collection(db, "orders"), order)
      .then((res) => {
        setOrderId(res.id);
        deleteCart();
      })
      .catch((err) => {
        console.error(err)
        setErr("Se produjo un error inesperado")
      })
  }


  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="productos">
        {cart.map(producto => (
          <div className="producto "key={producto.item.id}>
            <p>
              {producto.item.title} x {producto.qty}
            </p>
            <p>{producto.item.price} USD</p>
            <hr />
          </div>
        ))}
      </div>
      <div className="total-container">
        <h2>Total</h2>
        <p>{total} USD</p>
        <hr />
      </div>
      <form onSubmit={formHandler} className="form">
        <div className="input">
          <label htmlFor="">Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="">Apellido</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="">Teléfono</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="">Autenticar email</label>
          <input type="email" value={emailAuth} onChange={(e) => setEmailAuth(e.target.value)} />
        </div>

        {err && <p className="error"> {err} </p>}
        <button className="btn2 cart-btn" type="submit">Finalizar compra</button>
      </form>
      {
        orderId && (<strong>Gracias por tu compra! Tu número de orden es: {orderId} </strong>)
      }
    </div>
  )
}
