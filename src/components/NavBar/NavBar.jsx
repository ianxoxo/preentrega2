import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <header className="container">
            <nav>
                <ul className="navbar">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categorias/1"}>
                            YEEZY 500
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categorias/2"}>
                            YEEZY 700
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Link className="link" to="/">
                <h1 className="title">Elefethería</h1>
            </Link>
            <CartWidget />
        </header>
    )
}

export default NavBar