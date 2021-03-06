import { useRef } from 'react';
import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Settings from '../../config/settings';
import { login } from '../../contexts/actions';
import { useAuthState } from '../../contexts/contexts';
import { useAuthDispatch } from '../../contexts/contexts';

function LoginForm() {

    const navigate = useNavigate();
    const [validated, setValidated] = useState();
    const [isProcessing, setProcessing] = useState();
    const [isError, setError] = useState(false);
    const [btnText, setBtnText] = useState('Login');
    const { loading, errorMessage } = useAuthState();
    const dispatch = useAuthDispatch();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const httpOptions = Settings.httpOptions;
    const serverUrl = Settings.tokenUrl;

    const checkLogin = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setError(false);
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

        try {
            let response = await login(dispatch, requestBody);
            if (!response) {
                setProcessing(false);
                setError(true);
                setBtnText('Login');
                return;
            }
            navigate('/profile');
        } catch(error) {
            console.log(error);
        }
        /*fetch(serverUrl, httpOptions)
            .then(response => response.json())
            .then((response) => {
                if (response && response.token) {
                    localStorage.setItem('token', response.token);
                    navigate('/profile');
                } else {
                    setProcessing(false);
                    setError(true);
                    setBtnText('Login');
                }
            })
            .catch(error => {
                setProcessing(false);
                setError(true);
                setBtnText('Login');
            });*/ 
    }

    return (

        <div className="card">
            <div className="card-header">Login Form</div>
            <div className="card-body">
            <Form noValidate validated={validated} onSubmit={checkLogin}>
                {
                    isError ? 
                    <div className="alert alert-danger alert-dismissible">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Error!</strong> Username or password provided is incorrect
                  </div> : null
                }
                {errorMessage ? <p className="alert-danger">{errorMessage}</p> : null}
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