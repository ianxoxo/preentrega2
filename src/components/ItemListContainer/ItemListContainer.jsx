import React from 'react';
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, where, query} from "firebase/firestore";
import { db } from '../../services/config';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {idCat} = useParams();

  useEffect( () => {
    const myProducts = idCat ? query(collection(db, "productos"), where("idCat", "==", idCat)) : collection(db, "productos");

    getDocs(myProducts)
      .then((res) => {
        const newProducts = res.docs.map(doc => {
          const data = doc.data();
          return {id:doc.id, ...data}
        })
        setProducts(newProducts)
      })
      .catch((err) => console.error(err))

  }, [idCat])

  return (
    <section className="container">
      <ItemList products={products}></ItemList>
    </section>
  )
}

export default ItemListContainer