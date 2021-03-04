import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CardAccordion = ({ title, info, id }) => {
  const [isInfoDisplayed, setisInfoDisplayed] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => setisInfoDisplayed(!isInfoDisplayed)}
        >
          {isInfoDisplayed ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{isInfoDisplayed && info}</p>
    </article>
  );
};

CardAccordion.propTypes = {};

export default CardAccordion;
