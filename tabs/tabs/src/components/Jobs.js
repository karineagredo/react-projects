import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Job from './Job';

const url = 'https://course-api.com/react-tabs-project';

const Jobs = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const displayJobId = (index) => setValue(index);
  const companies = jobs.map((job) => job.company);

  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <div className='jobs-center'>
      <div className='btn-container'>
        <Nav
          jobs={companies}
          displayJobId={displayJobId}
          onDisplay={value}
        ></Nav>
      </div>
      <article className='job-info'>
        <Job jobs={jobs} value={value} />
      </article>
    </div>
  );
};

export default Jobs;
