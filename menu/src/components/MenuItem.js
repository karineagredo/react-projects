import React from 'react';

const MenuItem = ({ dish }) => {
  return (
    <div>
      {dish.id} {dish.title}
    </div>
  );
};

export default MenuItem;
