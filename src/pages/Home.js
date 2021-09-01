import React, {useState} from "react";
import Tasks from "../components/tasks/Tasks";
import {Col, Container, Row} from "react-bootstrap";

function Home() {
    const [tasks, setTasks] = useState([])

    function deleteTask(id) {
        setTasks(tasks.filter((element) => element.task.id !== id))
        console.log(id);
    }

    function addTask(task) {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {
            task:{ id, ...task }
        }
        setTasks([...tasks, newTask]);
    }

    return (
        <Container>
            <Row>
                <Col sm={8}>

                </Col>
                <Col sm={4}>
                    <Tasks data={tasks} onDelete={deleteTask} onAdd={addTask}/>
                </Col>
            </Row>
        </Container>
    );

}

export default Home;