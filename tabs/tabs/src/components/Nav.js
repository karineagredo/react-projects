import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ jobs, displayJobId, onDisplay }) => {
  return (
    <div>
      {jobs.map((job, index) => (
        <button
          className={`job-btn ${onDisplay === index && 'active-btn'}`}
          key={index}
          type='button'
          onClick={() => displayJobId(index)}
        >
          {job}
        </button>
      ))}
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
