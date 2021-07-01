import { Form, Col, InputGroup, Button } from "react-bootstrap";
import { useState } from 'react';

function NewAddressForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div className="card">
            <div className="card-header">
                New Contact Form
            </div>
            <div className="card-body">

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Contact Name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Contact name is required
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationphone">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="tel"
                                    placeholder="Phone"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide phone number.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="some@test.com"></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validateaddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows="5" required></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide address
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <div className="text-right">
                        <Button type="submit">Save Contact</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
export default NewAddressForm;