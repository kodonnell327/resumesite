import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    DropdownItem, NavItem, NavbarToggler, Collapse, NavbarText
} from 'reactstrap';
import {PATH_ABOUT, PATH_HOME, PATH_LINKED_IN} from "../constants/path";
// It's important that these are imported from lib for some reason. Otherwise the dropdown does not work.
import UncontrolledDropdown from "reactstrap/lib/UncontrolledDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Badge from "reactstrap/lib/Badge";

function MenuComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Kaitlyn O'Donnell</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href={PATH_ABOUT}>Work History</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={PATH_ABOUT}>University</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Contact Me
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href={PATH_LINKED_IN}>LinkedIn</NavLink>
                                    <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href={PATH_LINKED_IN}>LinkedIn</NavLink>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    <NavLink href={PATH_LINKED_IN}>Email Me</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MenuComponent;