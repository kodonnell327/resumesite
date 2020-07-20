import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    DropdownItem, NavItem
} from 'reactstrap';
import {PATH_ABOUT, PATH_HOME, PATH_LINKED_IN} from "../constants/path";
import UncontrolledDropdown from "reactstrap/lib/UncontrolledDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MenuComponent() {
    return (
        <Navbar color="light" light>
            <NavbarBrand href={PATH_HOME}>Kaitlyn O'Donnell</NavbarBrand>
            <Nav className="mr-auto" navbar>

                <UncontrolledDropdown nav>
                    <DropdownToggle nav caret>
                        About Me
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <NavLink href={PATH_ABOUT}>Work History</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink href={PATH_ABOUT}>University</NavLink>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <NavLink href={PATH_HOME}>Contact Me</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={PATH_LINKED_IN}>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} color="black" size="2x"/>
                    </NavLink>
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