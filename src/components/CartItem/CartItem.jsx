import { useContext } from "react"
import { CartContext } from "../../context/Context"

const CartItem = ({item, qty}) => {
    const {deleteProduct} = useContext(CartContext);
    return (
        <div>
            <h3>{item.title}</h3>
            <p>Cantidad: {qty}</p>
            <p>Precio: {item.price}</p>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
        </div>
    )
}

export default CartItem