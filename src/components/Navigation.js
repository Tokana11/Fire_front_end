import {Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruck} from "@fortawesome/free-solid-svg-icons";
import {faOilCan} from "@fortawesome/free-solid-svg-icons";
import {faTools} from "@fortawesome/free-solid-svg-icons";
import {faGasPump} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/vehicle">
            <Nav.Item>
                <Nav.Link style={{color:"gray"}} href="/vehicle">
                    <FontAwesomeIcon icon={faTruck}/> Автомобили
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color:"gray"}} eventKey="service">
                    <FontAwesomeIcon icon={faOilCan}/> Обслужвания
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color:"gray"}} eventKey="repair">
                    <FontAwesomeIcon icon={faTools}/> Ремонти
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color:"gray"}} eventKey="fueling">
                    <FontAwesomeIcon icon={faGasPump}/> Зарядки
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default Navigation;