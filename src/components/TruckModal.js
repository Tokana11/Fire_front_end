import {Button, Modal} from "react-bootstrap";
import TruckInput from "./TruckInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function TruckModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    Пожарен автомобил:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TruckInput/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.onHide}>
                    Отказ <FontAwesomeIcon icon={faTimes}/>
                </Button>
                <Button variant="outline-success" type="submit" >
                    Запиши <FontAwesomeIcon icon={faSave}/>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TruckModal;