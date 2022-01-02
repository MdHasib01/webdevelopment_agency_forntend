import React from "react";

const JobsCard = ({ job }) => {
  console.log(job);
  const { jobTitle, jobImg, profileImg, description } = job;

  return (
    <div className="jobCard">
      <img className="job-icon" src={jobImg} alt="" />
      <div className="buyer-profile">
        <img className="profile-icon" src={profileImg} alt="" />
        <a href="">{jobTitle}</a>
      </div>
      {/* <p>{job.description}</p> */}

      <button className="customBtn">Details</button>
    </div>
  );
};

export default JobsCard;
