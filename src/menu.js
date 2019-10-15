import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './scss/menu.scss';
import capitalize from './utils/capitalize';

class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage,
        };
    }

    getListItem(link, title) {
        let classes = ['menu-link'];
        if (this.state.currentPage === title) {
            classes.push('currentPage');
        }
        return (
            <li className='menu-list-item'>
                <Link to={link} className={classes.join(' ')}>
                        {capitalize(title)}</Link>
            </li>
        );
    }

    render() {
        return (
            <header className="menu-header">
                <ul className="menu-list">
                    {this.getListItem('/', 'home')}
                    {this.getListItem('/about', 'about')}
                </ul>
            </header>
        );
    }
}

export default Menu;