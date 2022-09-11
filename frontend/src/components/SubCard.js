import { Card, Row, Col } from "react-bootstrap";

import "./styles/SubCard.css"

function SubCard() {
  
    return (
        <Card className="sub-card">
            <Card.Title className="sub-card-title">Test</Card.Title>
            <Card.Footer>
                <Row className="sub-card-footer">
                    <Col className="sub-card-footer-left">
                        Start
                    </Col>
                    <Col className="sub-card-footer-right">
                        Price
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
  }
  
  export default SubCard;
  