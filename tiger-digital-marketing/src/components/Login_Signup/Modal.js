import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../App.css';
import './login_signup.css';

const CustomModal = ({ show, handleClose, title, children }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="custom-modal-header" closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="custom-modal-body">{children}</Modal.Body>
            <Modal.Footer className="custom-modal-footer">
                <Button className="custom-button-secondary" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;
