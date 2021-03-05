import React from 'react';

const Nav = (props) => {
  const [...items] = props.categories;

  return (
    <>
      <div className='btn-container'>
        {items.map((item) => (
          <button
            key={item}
            className='filter-btn'
            onClick={() => props.filterClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Nav;
