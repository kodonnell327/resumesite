import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './scss/global.scss';

function Menu() {
    return (
        <header className="App-header">
            <ul className="header-list">
                <li className='header-list-item'>
                    <Link to='/' className="header-link">
                    Home</Link>
                </li>
                <li className="header-list-item">
                <Link to='/about' className="header-link">
                    About</Link>
                </li>
            </ul>
        </header>
    );
}

export default Menu;