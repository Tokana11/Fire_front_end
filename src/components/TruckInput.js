import {Col, Form, Row} from "react-bootstrap";

const TruckInput = () => {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Рег. номер:</Form.Label>
                    <Form.Control type="text" placeholder="PB 0000 CA"/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>VIN номер:</Form.Label>
                    <Form.Control type="text" placeholder="4Y1SL65848Z411439"/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Застраховка №:</Form.Label>
                    <Form.Control type="text" placeholder="..."/>
                </Form.Group>
            </Row>
            <br/>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Марка:</Form.Label>
                    <Form.Control type="text" placeholder="Рено"/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Модел:</Form.Label>
                    <Form.Control type="text" placeholder="Мидлум dxi 270"/>
                </Form.Group>
            </Row>
            <br/>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>
                        Километраж:
                    </Form.Label>
                    <Form.Control type="text" placeholder="375197"/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Моточасовник:</Form.Label>
                    <Form.Control type="text" placeholder="105.7"/>
                </Form.Group>
            </Row>
        </Form>
    );
}
export default TruckInput;