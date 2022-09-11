import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import SubCard from "./SubCard";

import AddButton from "./AddSubscription"

import "./styles/MainContainer.css"
import "./styles/AddButton.css"

function MainContainer() {
    return (
        <Container fluid>
                <Row>
                    <Col sm={6}>
                        <Stack>
                            <Card.Header className="card-header">Subscriptions
                                <AddButton></AddButton>
                            </Card.Header>
                            <SubCard></SubCard>
                            <SubCard></SubCard>
                            <SubCard></SubCard>
                            <SubCard></SubCard>
                            <SubCard></SubCard>
                        </Stack>
                    </Col>
                </Row>
        </Container>
    );
  }
  
  export default MainContainer;
