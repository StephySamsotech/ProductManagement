import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductModal = ({ employee, showModal, handleCloseModal }) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Employee Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ "textAlign": "left" }}>
                {employee && (
                    <div>
                        <p>Employee ID: {employee.id}</p>
                        <p>Name: {employee.name}</p>
                        <p>Department: {employee.department}</p>
                        <p>Age : {employee.age}</p>
                        <p>Gender : {employee.gender}</p>
                        <p>Salary: {employee.salary}</p>
                        <p>Years Of Experience: {employee.yearsOfExperience}</p>


                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;
