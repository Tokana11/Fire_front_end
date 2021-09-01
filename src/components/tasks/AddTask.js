import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function AddTask({onAdd}) {
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('')

    const addTask = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Моля, въведете описание на задачата !')
            return
        }
        onAdd({date, text});
        setText('');
        setDate(new Date());
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Дата & Час:</Form.Label>
                <DatePicker showTimeSelect
                            showDisabledMonthNavigation
                            minDate={new Date()}
                            selected={date}
                            onChange={(date) => setDate(date)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Задача:</Form.Label>
                <Form.Control as="textarea"
                              placeholder="Описание..."
                              value={text}
                              onChange={(e) => setText(e.target.value)}
                />
            </Form.Group>
            <div className="d-grid">
                <Button onClick={addTask} size="lg" variant="outline-success">
                    <FontAwesomeIcon icon={faPlus}/> Добави
                </Button>
            </div>
        </Form>
    );
}

export default AddTask;