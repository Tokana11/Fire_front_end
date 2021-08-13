import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Deck from "../components/Deck";
import {Col, Container} from "react-bootstrap";


export default class Vehicle extends Component {
    render() {
        return (
            <>
                <Navigation/>
                <Container>
                    <Col className="mt-5 mr-5 ml-5">
                        <Deck/>
                    </Col>
                </Container>
            </>
        );
    }
}