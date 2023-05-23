import React from 'react';
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import {getProducts, getCategories} from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {idCat} = useParams();

  useEffect( () => {

    const showProducts = idCat ? getCategories : getProducts;

    showProducts(idCat)
      .then((res) => setProducts(res))
      .catch(error => console.error(error))
  }, [idCat])

  return (
    <section className="container">
      <ItemList products={products}></ItemList>
    </section>
  )
}

export default ItemListContainer