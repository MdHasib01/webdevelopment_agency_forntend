import React from "react";
import { Container } from "react-bootstrap";
import gigImage from "../../Assets/gigImage/gigImage.jpg";
import sellerImage from "../../Assets/gigImage/profile-image.jpg";
import SellerProfile from "../SellerDetails/SellerProfile/SellerProfile";
import "./GigDetails.css";
import GigPackage from "./GigPackage/GigPackage";

const GigDetails = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="row">
          <div className="col-md-7">
            <h3>I will design your amazon product listing images</h3>
            <div className="gig-details-profile">
              <img src={sellerImage} alt="" />
              <p>
                pori007 Level 2 seller | 5 start rating(469) | 6 orders in Queue
              </p>
            </div>
            <img
              src={gigImage}
              alt="gig_image"
              className="img-fluid gig-details-image"
            />
            <hr />
            <h4>About The Seller</h4>
            <SellerProfile />
            <hr />
            <p>
              My name is Umair Haider and I'm a Professional Graphic Designer
              and Photoshop expert with 6+ years experience, Specialized in
              Adobe Photoshop. I can design best amazon listing for your
              business which will increase your sales, also I can do any type of
              work related to Graphic Design and Photoshop editing. I like to do
              work in different sectors with clients and I can grow up your
              business. 100% Satisfaction or 100% Result. If you need a skilled
              and communicative designer, please feel free to contact me
              anytime.
            </p>
          </div>
          <div className="col-md-5">
            <GigPackage />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GigDetails;
