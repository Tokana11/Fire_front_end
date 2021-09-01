import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
import Image from "../../assets/images/fireTruck.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faQuestionCircle, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import EditTruckModal from "./EditTruckModal";

const TruckCard = ({id, card, editVehicle, deleteVehicle}) => {
    const [open, setOpen] = useState(false)
    const {
        regNumber, brand, model, mileage, vinNumber, engineHoursMeter, insuranceNumber
    } = card;

    function toggleModal() {
        setOpen(!open)
    }


    return (
        <>
            <Card>
                <Card.Img variant="top" src={Image}/>
                <Card.Body>
                    <Card.Title>{regNumber}</Card.Title>
                    <Card.Text>
                        <b>Марка:</b> {brand}
                        <br/>
                        <b>Модел:</b> {model}
                        <br/>
                        <b>Километраж:</b> {mileage}
                        <br/>
                        <b>Моточасвоник:</b> {engineHoursMeter}
                        <br/>
                        <b>Вин №:</b> {vinNumber}
                        <br/>
                        <b>Застраховка:</b>{insuranceNumber}
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
                            <Button variant="outline-primary"
                                    size="md"
                                    onClick={() => toggleModal()}
                            >
                                Редак. <FontAwesomeIcon icon={faEdit}/>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="outline-danger"
                                    size="md"
                                    onClick={() => deleteVehicle(id)}
                            >
                                Изтрий <FontAwesomeIcon icon={faTrashAlt}/>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {
                <EditTruckModal show={open}
                                onHide={toggleModal}
                                editVehicle={editVehicle}
                                card={card}
                />
            }
        </>
    );
}
export default TruckCard;