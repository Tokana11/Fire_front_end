import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFireAlt} from '@fortawesome/free-solid-svg-icons';
import {faTruck} from '@fortawesome/free-solid-svg-icons';
import {faUserShield} from '@fortawesome/free-solid-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {faCogs} from '@fortawesome/free-solid-svg-icons';


export default class Navigation extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faFireAlt}/> PFD
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">
                               <FontAwesomeIcon icon={faTruck}/> Engines
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                 <FontAwesomeIcon icon={faUserShield}/> Equipment
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                 <FontAwesomeIcon icon={faUsers}/> Employees
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title={<FontAwesomeIcon icon={faBell}/>} id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Notification 1
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Notification 2
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Notification 3
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<FontAwesomeIcon icon={faAddressCard}/>} id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                  <FontAwesomeIcon icon={faCogs}/>  Edit Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <FontAwesomeIcon icon={faQuestionCircle}/> Help
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    <FontAwesomeIcon icon={faSignOutAlt}/> Sing out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

