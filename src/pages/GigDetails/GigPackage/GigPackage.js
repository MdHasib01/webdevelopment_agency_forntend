import React from "react";
import "./Gigpackage.css";

const GigPackage = () => {
  return (
    <div className="gig-package">
      <div>
        <h3 className="text-center">PACKAGE</h3>
        <hr />
        <div className="d-flex justify-content-between mb-5">
          <h5>1 AMAZON LISTING IMAGE</h5>
          <h5>$100</h5>
        </div>

        <p>
          Background removing of 1 image Amazon Basic image requirement +
          Friendly Support
        </p>
        <p className="my-4" style={{ fontWeight: "bold" }}>
          <i class="bi bi-stopwatch"></i> 2 days Delevery{" "}
          <i class="bi bi-bootstrap-reboot"></i> 2 Reviews
        </p>
        <hr />
        <div style={{ fontWeight: "bold" }}>
          <h6>What you will get?</h6>
          <ul>
            <li>1 Image</li>
            <li>High Resolution</li>
            <li>Commercial Use</li>
          </ul>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          {" "}
          <button className="primary-btn">ORDER GIG($100)</button>
        </div>
      </div>
    </div>
  );
};

export default GigPackage;
