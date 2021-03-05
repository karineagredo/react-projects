import React from 'react';
import MenuItem from './MenuItem';
const Menu = ({ filteredDishes }) => {
  return (
    <div>
      {filteredDishes.map((dish) => {
        return <MenuItem key={dish.id} dish={dish}></MenuItem>;
      })}
    </div>
  );
};

export default Menu;
