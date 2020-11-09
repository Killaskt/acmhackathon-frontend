import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

import './Accord.css';

const Accord = (props) => {
    return (
        <Accordion>
            <Card id="accord">
                <Accordion.Toggle id="accord-header" as={Card.Header} eventKey="0">
                    {props.header}
                </Accordion.Toggle>
                <Accordion.Collapse id="accord-collapse" eventKey="0">
                    <Card.Body id="cardbody">{props.body}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Accord;