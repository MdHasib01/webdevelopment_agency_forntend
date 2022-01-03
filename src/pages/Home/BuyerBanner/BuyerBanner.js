import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BuyerBanner.css";
import BuyerBannerImg from "../../../Assets/image/banner/banner2.png";

const BuyerBanner = () => {
  return (
    <div>
      <div className="buyer-section">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <h3>WEB DEV AGENCY</h3>
              <hr />
              <h2>A business solution designed for teams</h2>
              <p className="my-4">
                Upgrade to a curated experience packed with tools and benefits,
                dedicated to businesses
              </p>
              <ul className="buyer-section-ul">
                <li>Connect to freelancers with proven business experience</li>
                <li>
                  Get matched with the perfect talent by a customer success
                  manager
                </li>
                <li>
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </li>
              </ul>
              <div className="mb-4">
                <button className="primary-btn">Hire Freelancer</button>
              </div>
            </div>
            <div className="col-md-6 buyer-section-img">
              <img className="img-fluid" src={BuyerBannerImg} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BuyerBanner;
