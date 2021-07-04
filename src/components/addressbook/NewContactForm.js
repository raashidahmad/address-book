import { Form, Col, InputGroup, Button } from "react-bootstrap";
import { useState, useRef } from 'react';
import Settings from "../../config/settings";
import { useHistory } from 'react-router-dom';

function NewContactForm() {
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [isPosting, setPosted] = useState(false);
    const [btnText, setText] = useState('Save Contact');
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    const addressInputRef = useRef();
    const httpOptions = Settings.httpOptions;
    const url = Settings.serverUrl;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return false;
        }
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const address = addressInputRef.current.value;
        const phone = phoneInputRef.current.value;

        const contactData = {
            name: name,
            email: email,
            phone: phone,
            address: address,
        };

        setPosted(true);
        setText('Saving....');
        httpOptions.body = JSON.stringify(contactData);
        fetch(url, httpOptions)
            .then(response => response.json())
            .then((response) => {
                history.push('/');
            })
            .catch(error => {
                //this.setState({ errorMessage: error.toString() });
                setPosted(false);
                setText('Save Contact');
                console.error('There was an error!', error);
            });;
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
                                    ref={nameInputRef}
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
                                    ref={phoneInputRef}
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
                            <Form.Control type="email" placeholder="some@test.com" ref={emailInputRef}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validateaddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows="5" ref={addressInputRef} required></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide address
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <div className="text-right">
                        <Button disabled={isPosting} type="submit">{btnText}</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
export default NewContactForm;