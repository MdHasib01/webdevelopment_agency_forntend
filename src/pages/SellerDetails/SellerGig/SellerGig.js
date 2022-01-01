import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import gigImage from "../../../Assets/gigImage/gigImage.jpg";
import profileImage from "../../../Assets/gigImage/profile-image.jpg";

const SellerGig = () => {
  return (
    <div>
      <Row md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={gigImage} />
            <Card.Body>
              <div className="seller-profile">
                <div className="img-section">
                  <Link to="/seller-profile">
                    <img src={profileImage} alt="" />
                  </Link>
                </div>
                <div className="name-section">
                  <Link to="/seller-profile" className="gig-card-link">
                    <h6>Pori007</h6>
                  </Link>

                  <p>Level 2 seller</p>
                </div>
              </div>

              <Link to="/gig_details" className="gig-card-link">
                <Card.Title>
                  I will design your amazon product listing images
                </Card.Title>
              </Link>
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
                  <Link to="/seller-profile">
                    <img src={profileImage} alt="" />
                  </Link>
                </div>
                <div className="name-section">
                  <Link to="/seller-profile" className="gig-card-link">
                    <h6>Pori007</h6>
                  </Link>

                  <p>Level 2 seller</p>
                </div>
              </div>

              <Link to="/gig_details" className="gig-card-link">
                <Card.Title>
                  I will design your amazon product listing images
                </Card.Title>
              </Link>
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
                  <Link to="/seller-profile">
                    <img src={profileImage} alt="" />
                  </Link>
                </div>
                <div className="name-section">
                  <Link to="/seller-profile" className="gig-card-link">
                    <h6>Pori007</h6>
                  </Link>

                  <p>Level 2 seller</p>
                </div>
              </div>

              <Link to="/gig_details" className="gig-card-link">
                <Card.Title>
                  I will design your amazon product listing images
                </Card.Title>
              </Link>
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
                  <Link to="/seller-profile">
                    <img src={profileImage} alt="" />
                  </Link>
                </div>
                <div className="name-section">
                  <Link to="/seller-profile" className="gig-card-link">
                    <h6>Pori007</h6>
                  </Link>

                  <p>Level 2 seller</p>
                </div>
              </div>

              <Link to="/gig_details" className="gig-card-link">
                <Card.Title>
                  I will design your amazon product listing images
                </Card.Title>
              </Link>
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
