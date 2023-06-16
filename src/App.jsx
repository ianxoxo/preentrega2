import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/Context';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categorias/:idCat" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path='*' element={<div className="container">
              <h2>Error 404</h2>
              <p>Este sitio no existe.</p>
            </div>} />
            <Route path='/cart' element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
