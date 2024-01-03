import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Начало</Link></li>
                <li><Link to="/about">За нас</Link></li>
                <li><Link to="/contact">Контакти</Link></li>
                <li><Link to="/search">Търсене</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
