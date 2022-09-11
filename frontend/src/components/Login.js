import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./styles/Login.css"

function Login( { setUser }) {

    const [signinShow, setsigninShow] = useState(false)
    const [signupShow, setsignupShow] = useState(false)

    
    const handleSignIn = (event) => {
        event.preventDefault();

        const userName = event.target.userName.value
        const password = event.target.password.value
    }

    const handleSignUp = (event) => {
        event.preventDefault();

        const userName = event.target.userName.value
        const password = event.target.password.value
    }


    return (
        <div className="login-div">
            <h1 className="login-h1">Subscription Manager</h1>
            <h3 className="login-h3">Easily Manage your Subscriptions</h3>
            <button className="signin-btn" onClick={() => setsigninShow(true)}>Sign In</button>
            <button className="signup-btn" onClick={() => setsignupShow(true)}>Sign Up</button>

        <Modal show={signinShow} onHide={() => setsigninShow(false)} className="add-modal">
            <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSignIn}>
                <Form.Group controlId="Username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="userName" placeholder="Enter Username"/>
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password"/>
                </Form.Group>
                <Button variant="secondary" type="submit">Sign In</Button>
                </Form>
            </Modal.Body>
        </Modal>

        <Modal show={signupShow} onHide={() => setsignupShow(false)} className="add-modal">
            <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSignUp}>
                <Form.Group controlId="Username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="userName" placeholder="Enter Username"/>
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password"/>
                </Form.Group>
                <Button variant="secondary" type="submit">Sign Up</Button>
                </Form>
            </Modal.Body>
        </Modal>
        </div>
    );
  }
  
  export default Login;