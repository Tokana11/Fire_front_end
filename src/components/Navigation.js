import {Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGasPump, faOilCan, faTools, faTruck} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useRouteMatch} from "react-router-dom";

const Navigation = () => {

    const {url} = useRouteMatch();

    const {pathname} = useLocation();


    return (
        <Nav justify variant="tabs">
            <Nav.Item>
                <Nav.Link style={{color: "gray"}} active={pathname === url} href={`${url}`}>
                    <FontAwesomeIcon icon={faTruck}/> Автомобили
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: "gray"}} active={pathname === `${url}/service`} href={`${url}/service`}>
                    <FontAwesomeIcon icon={faOilCan}/> Обслужвания
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: "gray"}} active={pathname === `${url}/repair`} href={`${url}/repair`}>
                    <FontAwesomeIcon icon={faTools}/> Ремонти
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: "gray"}} active={pathname === `${url}/fueling`} href={`${url}/fueling`}>
                    <FontAwesomeIcon icon={faGasPump}/> Зарядки
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default Navigation;