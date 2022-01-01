import React from "react";
import { Container } from "react-bootstrap";
import SellerGig from "./SellerGig/SellerGig";
import SellerProfile from "./SellerProfile/SellerProfile";

const SellerDetails = () => {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-md-4">
            <SellerProfile />
          </div>
          <div className="col-md-8">
            <SellerGig />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SellerDetails;
