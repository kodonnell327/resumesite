import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../scss/menu.scss';
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';

function MenuComponent() {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand>reactstrap</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default MenuComponent;

/*
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
*/