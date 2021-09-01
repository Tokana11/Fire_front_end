import React from "react";
import {Card, Container, ListGroup} from "react-bootstrap";
import Task from "./Task";
import AddTask from "./AddTask";


function Tasks({data, onDelete, onAdd}) {
    return (
        <Card className="task-card">
            <Card.Header as="h3">Задачи:</Card.Header>
            <Card.Body>
                <Card.Title>
                    <AddTask onAdd={onAdd}/>
                </Card.Title>
            </Card.Body>
            <Container>
                <ListGroup variant="flush">
                    {data.map((task, index) => (
                        <Task key={index} id={task.id} data={task}  onDelete={onDelete}/>
                    ))}
                </ListGroup>
            </Container>
        </Card>
    );
}

export default Tasks;