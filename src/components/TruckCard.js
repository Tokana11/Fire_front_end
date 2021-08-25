import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
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
                    <b>Марка:</b> {card.brand}
                    <br/>
                    <b>Модел:</b> {card.model}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <Button variant="outline-info" size={"sm"}>
                    ТТД <FontAwesomeIcon icon={faQuestionCircle}/>
                    {/*TODO possible to use accordion*/}
                </Button>
            </ListGroup>
            <Card.Body>
                <Row>
                    <Col>
                        <Button variant="outline-primary" size="md">
                            Редак. <FontAwesomeIcon icon={faEdit}/>
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