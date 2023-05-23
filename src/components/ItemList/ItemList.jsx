import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({products}) => {
    return (
        <div className="container productContainer">
            {
                products.map(prod => <Item key={prod.id} {...prod}></Item>)
            }
        </div>
    )
}

export default ItemList