import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "../../../Assets/image/banner/1.png";

import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <Container>
        <Row md={2} sm={1} xs={1}>
          <Col className="top-banner-left-col">
            <h1>THE BEST WAY TO RUN YOUR BUSINESS IN REAL-TIME</h1>
            <p>
              Getting online is easy. Succeeding online is a different story.
              You.ll need than just a beautiful website to stand out these days.
            </p>
            <button className="primary-btn">GET STARTED</button>
          </Col>
          <Col>
            <img src={bannerImg} alt="banner_image" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBanner;
