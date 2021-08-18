import {Button, Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Image from "../../src/assets/images/fireTruck.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faQuestionCircle, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const TruckCard = ({card}) => {
    return (
        <Card>
            <Card.Img variant="top" src={Image}/>
            <Card.Body>
                <Card.Title>{card.regNumber}</Card.Title>
                <Card.Text>
                    Марка: {card.brand}
                    <br/>
                    Модел: {card.type}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Button variant="outline-info" size={"sm"}>
                        ТТД  <FontAwesomeIcon icon={faQuestionCircle}/>
                        {/*TODO possible to use accordion*/}
                    </Button>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Row>
                    <Col>
                        <Button variant="outline-primary" size="md">
                           Редак.  <FontAwesomeIcon icon={faEdit}/>
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-danger" size="md">
                          Изтрий <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
export default TruckCard;