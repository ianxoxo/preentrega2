import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, title, price, img}) => {
    return ( 
        <div key={id} className="card_product">
            <img className="product_img" src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{price} USD</p>
            <Link to={`/item/${id}`} className="btn">Detalles</Link>
        </div>
    )
} 

export default Item