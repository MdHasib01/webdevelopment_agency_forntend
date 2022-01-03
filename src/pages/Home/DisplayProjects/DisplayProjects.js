import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisplayProjects.css";
import profileImage from "../../../Assets/gigImage/profile-image.jpg";

const DisplayProjects = () => {
  return (
    <div className="display-projects">
      <Container>
        <h2 className="mb-4">
          Get inspired with projects made by our freelancers
        </h2>
        <div className="display-projects-cards">
          <Row md={4} sm={2} xs={1} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/qBT7wCZ/download-1.jpg"
                />
                <hr />
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
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/3T7vY1n/download-2.jpg"
                />{" "}
                <hr />
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
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/dPbwp9f/download-3.jpg"
                />
                <hr />
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
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/C8DbwMp/images.jpg"
                />{" "}
                <hr />
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default DisplayProjects;
