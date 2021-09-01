import React from "react";
import {Button, Col, ListGroupItem, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Task({data,id, onDelete}) {

    const date = data.task.date;
    const formatter = new Intl.DateTimeFormat("ru");
    const formattedDate = formatter.format(date);
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return (
        <ListGroupItem>
            <Row>
                <Col xs={9}>
                    <h6>{data.task.text}</h6>
                   <p>{formattedDate} {" "} {hour}{":"}{minutes}</p>
                </Col>
                <Col xs={3}>
                    <Button onClick={() => onDelete(data.task.id)} variant="outline-danger"> <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                </Col>
            </Row>
        </ListGroupItem>
    );
}

export default Task