import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './scss/menu.scss';

function Menu() {
    return (
        <header className="menu-header">
            <ul className="menu-list">
                <li className='menu-list-item'>
                    <Link to='/' className="menu-link">
                    Home</Link>
                </li>
                <li className="menu-list-item">
                <Link to='/about' className="menu-link">
                    About</Link>
                </li>
            </ul>
        </header>
    );
}

export default Menu;