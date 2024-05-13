import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'; // Import your CSS file
import { Navigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            sessionStorage.setItem('isLoggedIn', 'true');
            Navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };


    
    return (
        <Container fluid className="login-container"> {/* Use fluid for full width */}
            <div className="background-image"></div> {/* Empty div for background image */}
            <Form className="login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Login;
