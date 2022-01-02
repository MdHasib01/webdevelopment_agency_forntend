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
            <h4>MD. RASHIDUL ISLAM</h4>
            <h4>MD. RASHIDUL ISLAM</h4>
            <h4>MD. RASHIDUL ISLAM</h4>
            <h4>MD. RASHIDUL ISLAM</h4>
          </div>
        </div>

        <div className="job-info">
          <div className="jobReq">
            <h1>Job Requirement</h1>
          </div>

          <div className="comment-section">
            <div className="display-comment">
              <img className="comment-img" src={avatar} alt="" />{" "}
              <span>Name</span>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur voluptatum suscipit a accusamus dolor quisquam
                repudiandae esse optio dignissimos natus.{" "}
              </p>
              <img className="comment-img" src={avatar} alt="" />{" "}
              <span>Name</span>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur voluptatum suscipit a accusamus dolor quisquam
                repudiandae esse optio dignissimos natus.{" "}
              </p>
            </div>

            <div className="add-comment">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  className="input"
                  placeholder="Message"
                  {...register("message", { required: true })}
                />
                <input className="customBtn" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
