import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faBell,
    faCogs,
    faFireAlt,
    faQuestionCircle,
    faSignOutAlt,
    faTruck,
    faUsers,
    faUserShield
} from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faFireAlt}/> ПБЗН
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/vehicle">
                            <FontAwesomeIcon icon={faTruck}/> Атомобили
                        </Nav.Link>
                        <Nav.Link href="/equipment">
                            <FontAwesomeIcon icon={faUserShield}/> ПТВ
                        </Nav.Link>
                        <Nav.Link href="/employees">
                            <FontAwesomeIcon icon={faUsers}/> Служители
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
                                <FontAwesomeIcon icon={faCogs}/> Edit Profile
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
export default Header;
