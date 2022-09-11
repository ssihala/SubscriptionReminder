import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function AddButton() {
  const [show, setShow] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();

    const subName = event.target.serviceName;
    const subPrice = event.target.servicePrice;
    const subDate = event.target.serviceStart;

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="add-button" onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose} className="add-modal">
        <Modal.Header closeButton>
          <Modal.Title>New Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={formSubmit}>
            <Form.Group className="name"  controlId="ServiceName">
                <Form.Label>Service Name</Form.Label>
                <Form.Control type="text" name="serviceName" placeholder="Enter name"/>
            </Form.Group>
            <Form.Group className="price" controlId="SubPrice">
                <Form.Label>Subscription Price</Form.Label>
                <Form.Control type="text" name="servicePrice" placeholder="Price"/>
            </Form.Group>
            <Form.Group className="date" controlId="SubDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" name="serviceStart" placeholder="Date"/>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddButton;