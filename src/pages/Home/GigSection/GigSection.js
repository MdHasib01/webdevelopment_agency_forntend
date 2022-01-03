import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import gigImage from "../../../Assets/gigImage/gigImage.jpg";
import "./GigSection.css";
import profileImage from "../../../Assets/gigImage/profile-image.jpg";

const GigSection = () => {
  return (
    <div className="mb-5">
      <h2 className="text-center my-4">THIS IS GIG SECTION</h2>

      <Container>
        <hr />
        <Row lg={4} md={3} sm={2} xs={1} className="g-4">
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
      </Container>
    </div>
  );
};

export default GigSection;
