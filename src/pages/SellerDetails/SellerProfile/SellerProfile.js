import React from "react";
import sellerImage from "../../../Assets/gigImage/gigImage.jpg";
import "./SellerProfile.css";

const SellerProfile = () => {
  return (
    <div className="seller-profile-details">
      <div className="seller-profile-top">
        <img src={sellerImage} alt="" />
        <h5>Hitesh001</h5>
        <p>I will design your amazon product listing images</p>
        <p>5 stars (400 reviews)</p>
        <button className="primary-btn">Contact me</button>
      </div>

      <hr />
      <table>
        <tr>
          <td>From</td>
          <td className="text-end">Bangladesh</td>
        </tr>
        <tr>
          <td>Member since</td>
          <td className="text-end">Sep 2020</td>
        </tr>
        <tr>
          <td>Avg. Response Time</td>
          <td className="text-end">1 hour</td>
        </tr>
        <tr>
          <td>Last Delivery</td>
          <td className="text-end">7 days ago</td>
        </tr>
      </table>
    </div>
  );
};

export default SellerProfile;
