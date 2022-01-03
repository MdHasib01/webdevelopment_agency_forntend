import React from "react";
import "./GigComments.css";
import buyerProfile from "../../../Assets/gigImage/gigImage.jpg";

const GigComments = () => {
  return (
    <div className="mt-4">
      <h4 className="mb-3">What people loved about this seller</h4>
      <div className="comments-area">
        <div>
          <img src={buyerProfile} alt="" />
        </div>
        <div className="gig-comments">
          <h6>
            Buyer Name | Bangladesh |{" "}
            <i className="bi bi-star-fill" style={{ color: "#ffbe5b" }}></i>{" "}
            <span style={{ color: "#ffbe5b" }}>5</span>
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequatur consequuntur corrupti provident dolorum iste sit veniam
            vel libero ut?
          </p>
        </div>
      </div>
    </div>
  );
};

export default GigComments;
