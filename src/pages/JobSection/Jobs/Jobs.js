import React, { useEffect, useState } from 'react';
import JobDetails from './JobDetails';
import JobsCard from './JobsCard';
import './jobSection.css'

const Jobs = () => {
  const [jobs, setJobs]= useState([]);
  useEffect(()=>{
    fetch("/generated.json")
    .then(res=>res.json())
    .then(data=>setJobs(data))
  },[])
  return (
    <div>
      <div className="jobs-container">
        {
          jobs.map(job => <JobsCard
          key={job.id}
          job={job}
          ></JobsCard>)
        }
      </div>    
    </div>
  );
};

export default Jobs;