import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faTimes} from "@fortawesome/free-solid-svg-icons";

function AddTruckInput  ({addVehicle, onHide}) {

    const [regNum, setRegNum] = useState('');
    const [vinNum, setVinNum] = useState('');
    const [insuranceNum, setInsuranceNum] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [mileage, setMileage] = useState('');
    const [engineHoursMeter, setEngineHoursMeter] = useState('');


    function addTruck() {
        addVehicle({regNum, vinNum, insuranceNum, brand, model, mileage, engineHoursMeter})
        onHide();
    }

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Рег. номер:</Form.Label>
                    <Form.Control type="text"
                                  placeholder={regNum}
                                  onChange={(e) => setRegNum(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>VIN номер:</Form.Label>
                    <Form.Control type="text"
                                  placeholder={vinNum}
                                  onChange={e => setVinNum(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Застраховка №:</Form.Label>
                    <Form.Control type="text"
                                  placeholder={insuranceNum}
                                  onChange={(e) => (setInsuranceNum(e.target.value))}
                    />
                </Form.Group>
            </Row>
            <br/>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Марка:</Form.Label>
                    <Form.Control type="text"
                                  placeholder={brand}
                                  onChange={e => setBrand(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Модел:</Form.Label>
                    <Form.Control type="text"
                                  placeholder={model}
                                  onChange={e => setModel(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <br/>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>
                        Километраж:
                    </Form.Label>
                    <Form.Control type="text"
                                  placeholder={mileage}
                                  onChange={e => setMileage(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Моточасовник:</Form.Label>
                    <Form.Control type="text"
                                  placeholder={engineHoursMeter}
                                  onChange={e => setEngineHoursMeter(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <hr/>
            <Row>
                <Form.Group as={Col}>

                </Form.Group>
                <Form.Group as={Col} style={{textAlign: "right"}}>
                    <Button
                        variant="outline-danger"
                        onClick={onHide}
                    >
                        Отказ <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                    {" "}
                    <Button variant="outline-success"
                            onClick={addTruck}
                    >
                        Запиши <FontAwesomeIcon icon={faSave}/>
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    );
}
export default AddTruckInput;