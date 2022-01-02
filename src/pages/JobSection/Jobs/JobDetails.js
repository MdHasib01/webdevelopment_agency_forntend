import React from "react";
import { useForm } from "react-hook-form";
import avatar from "../../../Assets/Ellipse 91.png";

const JobDetails = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="customContainer">
      <div className="jobDetails">
        <div className="buyerProfile">
          <img className="buyerImg" src={avatar} alt="" />
          <div className="buyerInfo">
            <h4>MD. RASHIDUL ISLAM</h4>
          </div>
        </div>

        <div className="job-info">
          <div className="jobReq">
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
            <h5>Rashidul islam</h5>
          </div>
          <div className="comment-section">
            <div className="display-comment"></div>
            <div className="add-comment">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("message", { required: true })} />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
