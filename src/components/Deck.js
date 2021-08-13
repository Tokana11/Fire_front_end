import React, {Component} from "react";
import {Card, Col, ListGroup, ListGroupItem, Row,} from "react-bootstrap";
import Image from "../../src/assets/images/fireTruck.png";

export default class Deck extends Component {
    render() {
        return (
            <>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({length: 4}).map((_, idx) => (
                        <Col>
                            <Card style={{width: '30rem'}}>
                                <Card.Img variant="top" src={Image}/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
        );
    }
}