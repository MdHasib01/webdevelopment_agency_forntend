import React from "react";
import "./GigComments.css";
import buyerProfile from "../../../Assets/gigImage/gigImage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const GigComments = () => {
  return (
    <div className="mt-4">
      <h4 className="mb-3">What people loved about this seller</h4>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <div className="comments-area">
            <div>
              <img src={buyerProfile} alt="" />
            </div>
            <div className="gig-comments">
              <h6>
                Buyer Name 1 | Bangladesh |{" "}
                <i className="bi bi-star-fill" style={{ color: "#ffbe5b" }}></i>{" "}
                <span style={{ color: "#ffbe5b" }}>5</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                consequatur consequuntur corrupti provident dolorum iste sit
                veniam vel libero ut?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comments-area">
            <div>
              <img src={buyerProfile} alt="" />
            </div>
            <div className="gig-comments">
              <h6>
                Buyer Name 2 | Bangladesh |{" "}
                <i className="bi bi-star-fill" style={{ color: "#ffbe5b" }}></i>{" "}
                <span style={{ color: "#ffbe5b" }}>5</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                consequatur consequuntur corrupti provident dolorum iste sit
                veniam vel libero ut?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comments-area">
            <div>
              <img src={buyerProfile} alt="" />
            </div>
            <div className="gig-comments">
              <h6>
                Buyer Name 3 | Bangladesh |{" "}
                <i className="bi bi-star-fill" style={{ color: "#ffbe5b" }}></i>{" "}
                <span style={{ color: "#ffbe5b" }}>5</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                consequatur consequuntur corrupti provident dolorum iste sit
                veniam vel libero ut?
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GigComments;
