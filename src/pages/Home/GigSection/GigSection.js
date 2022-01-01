import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import gigImage from "../../../Assets/gigImage/gigImage.jpg";
import "./GigSection.css";

const GigSection = () => {
  return (
    <div>
      <h2 className="text-center">This is gig section</h2>
      <Container>
        <Row md={4}>
          <Col>
            <Card>
              <Card.Img variant="top" src={gigImage} />
              <Card.Body>
                <div className="seller-profile">
                  <div className="img-section">
                    <img src={gigImage} alt="" />
                  </div>
                  <div className="name-section">
                    <h6>Hitesh001</h6>
                    <p>Level 2 seller</p>
                  </div>
                </div>
                <Card.Title>
                  I will design your amazon product listing images
                </Card.Title>
              </Card.Body>
              <Card.Footer className="gig-card-footer">
                <small className="text-muted">
                  Starting at <span>$5</span>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={gigImage} />
              <Card.Body>
                <div className="seller-profile">
                  <div className="img-section">
                    <img src={gigImage} alt="" />
                  </div>
                  <div className="name-section">
                    <h6>Hitesh001</h6>
                    <p>Level 2 seller</p>
                  </div>
                </div>
                <Card.Title>
                  I will design your amazon product listing images
                </Card.Title>
              </Card.Body>
              <Card.Footer className="gig-card-footer">
                <small className="text-muted">
                  Starting at <span>$5</span>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={gigImage} />
              <Card.Body>
                <div className="seller-profile">
                  <div className="img-section">
                    <img src={gigImage} alt="" />
                  </div>
                  <div className="name-section">
                    <h6>Hitesh001</h6>
                    <p>Level 2 seller</p>
                  </div>
                </div>
                <Card.Title>
                  I will design your amazon product listing images
                </Card.Title>
              </Card.Body>
              <Card.Footer className="gig-card-footer">
                <small className="text-muted">
                  Starting at <span>$5</span>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={gigImage} />
              <Card.Body>
                <div className="seller-profile">
                  <div className="img-section">
                    <img src={gigImage} alt="" />
                  </div>
                  <div className="name-section">
                    <h6>Hitesh001</h6>
                    <p>Level 2 seller</p>
                  </div>
                </div>
                <Card.Title>
                  I will design your amazon product listing images
                </Card.Title>
              </Card.Body>
              <Card.Footer className="gig-card-footer">
                <small className="text-muted">
                  Starting at <span>$5</span>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GigSection;
