import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './components/syles/buttons.css';

function Buttons() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="add-button" variant="primary" onClick={handleShow}>
        Add Subscription
      </Button>

      <Modal show={show} onHide={handleClose} className="add-modal">
        <Modal.Header closeButton>
          <Modal.Title>New Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="name" controlId="ServiceName">
                <Form.Label>Service Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"/>
            </Form.Group>
            <Form.Group className="price" controlId="SubPrice">
                <Form.Label>Subscription Price</Form.Label>
                <Form.Control type="text" placeholder="Price"/>
            </Form.Group>
            <Form.Group className="date" controlId="SubDate">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type="date" placeholder="Date"/>
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Buttons;