import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import gigImage from "../../../Assets/gigImage/gigImage.jpg";

const SellerGig = () => {
  return (
    <div>
      <Row md={3}>
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
    </div>
  );
};

export default SellerGig;
