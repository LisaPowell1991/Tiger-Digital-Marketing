import React, { useState } from 'react';
import { auth, googleProvider } from '../../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomModal from './Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

const Login = ({ show, handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('User logged in successfully!');
        } catch (error) {
            toast.error('Error logging in: ' + error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            handleClose();
            toast.success('User signed in with Google successfully!');
        } catch (error) {
            toast.error('Error signing in with Google: ' + error.message);
        }
    };

    return (
        <CustomModal show={show} handleClose={handleClose} title="Login">
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail">
                    <Form.Label className="custom-form-label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className="custom-form-label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>
                <Button className="custom-button" type="submit">
                    Log In
                </Button>
                <Button className="custom-button-secondary" onClick={handleGoogleLogin}>
                    Log In with Google
                </Button>
            </Form>
        </CustomModal>
    );
};

export default Login;
