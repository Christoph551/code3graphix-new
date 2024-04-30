import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [showModal, setShowModal] = useState(false);
    const [redirectAfterClose, setRedirectAfterClose] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        const user_email = document.querySelector('#user_email').value;
        const password = document.querySelector('#password').value;

        if (user_email && password) {
            try {
                const response = await fetch('http://localhost:3001/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify({ 
                        user_email: user_email, 
                        password: password 
                    }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    setShowModal(true);
                    setRedirectAfterClose(true);
                } else if (response.status === 400) {
                    setErrorMessage('Incorrect email or password. Please try again.');
                    setShowModal(true); // Show modal with error message
                }
            } catch (error) {
                console.error('Error logging in:', error.message);
                setErrorMessage('Failed to log in. Please try again.');
                setShowModal(true); // Show modal with error message
            }
        } else {
            setErrorMessage('Please enter both an email and password to log in.');
            setShowModal(true); // Show modal with error message
        }

    };

    const handleModalClose = () => {
        setShowModal(false);
        if (redirectAfterClose) {
            document.location.replace('/');
        }
    };

    return (
        <div className='loginPage'>
            <h1 className='loginTitle'>Login</h1>
            <Form className="loginForm" onSubmit={handleLogin}>
                <Form.Group controlId="user_email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className="formBottom">
                <p>Don't have an account? <a href="/signup">Sign up here</a> instead.</p>
            </div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {redirectAfterClose ? (
                        <p>You have successfully logged in.</p>
                    ) : (
                        <p>{errorMessage}</p> // Display error message within modal
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;
