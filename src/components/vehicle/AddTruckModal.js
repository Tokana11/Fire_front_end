import {Modal} from "react-bootstrap";
import AddTruckInput from "./AddTruckInput";

function AddTruckModal({onHide, show, addVehicle}) {

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header onClick={onHide} closeButton>
                <Modal.Title>
                    Пожарен автомобил:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddTruckInput onHide={onHide}
                               addVehicle={addVehicle}
                />
            </Modal.Body>
        </Modal>
    );
}

export default AddTruckModal;