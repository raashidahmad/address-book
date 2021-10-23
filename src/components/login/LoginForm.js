import { useRef } from 'react';
import { useState } from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Settings from '../../config/settings';

function LoginForm() {
    const history = useHistory();
    const [validated, setValidated] = useState();
    const [isProcessing, setProcessing] = useState();
    const [isError, setError] = useState(false);
    const [btnText, setBtnText] = useState('Login');

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const httpOptions = Settings.httpOptions;
    const serverUrl = Settings.tokenUrl;

    const checkLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            return false;
        }

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        const requestBody = {
            email: email,
            password: password
        };
        setProcessing(true);
        setBtnText('Checking login...');
        httpOptions.body = JSON.stringify(requestBody);

        fetch(serverUrl, httpOptions)
            .then(response => response.json())
            .then((response) => {
                if (response && response.token) {
                    console.log('Token: ' + response.token);
                }
                //history.push('/profile');
            })
            .catch(error => {
                setProcessing(false);
                setError(true);
                setBtnText('Login');
            }); 
    }

    return (

        <div className="card">
            <div className="card-header">Login Form</div>
            <div className="card-body">
            <Form noValidate validated={validated} onSubmit={checkLogin}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="email@test.com" ref={emailInputRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationEmail">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" ref={passwordInputRef} required></Form.Control>
                    </Form.Group>
                </Form.Row>
                <div className="text-right">
                    <Button disabled={isProcessing} type="submit">{btnText}</Button>
                </div>
            </Form>
            </div>
        </div>
    );
}
export default LoginForm;