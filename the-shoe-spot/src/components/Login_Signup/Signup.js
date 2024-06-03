import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomModal from './Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

const Signup = ({ show, handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            handleClose();
            toast.success('User signed in successfully!');
        } catch (error) {
            toast.error('Error signing in: ' + error.message);
        }
    };

    return (
        <CustomModal show={show} handleClose={handleClose} title="Sign Up">
            <Form onSubmit={handleSignup}>
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
                    Sign Up
                </Button>
            </Form>
        </CustomModal>
    );
};

export default Signup;
