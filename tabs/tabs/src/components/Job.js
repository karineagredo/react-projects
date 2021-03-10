import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Job = ({ jobs, value }) => {
  console.log(value);
  const { company, title, dates, duties } = jobs[value];

  return (
    <>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {duties.map((dutie, index) => {
        return (
          <div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{dutie}</p>
          </div>
        );
      })}
      <button type='button' className='btn'>
        More info
      </button>
    </>
  );
};

Job.propTypes = {};

export default Job;
