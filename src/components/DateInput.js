import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";

const DateInput = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEdnDate] = useState(new Date());
    return (

        <>
           <Form>
               <Row>
                   <Col>
                       {"От: "}
                       <DatePicker
                           closeOnScroll={true}
                           selected={startDate}
                           onChange={(date) => setStartDate(date)}
                       />
                   </Col>

                   <Col>
                       {"До: "}
                       <DatePicker
                           closeOnScroll={true}
                           selected={endDate}
                           onChange={(date) => setEdnDate(date)}
                       />
                   </Col>
               </Row>
           </Form>
        </>

    );
}
export default DateInput;