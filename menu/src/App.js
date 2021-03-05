import React, { useState } from 'react';
import Title from './components/Title';
import Nav from './components/Nav';
import MenuItem from './components/MenuItem';
import MenuRestaurant from './components/Menu';
import data from './data';
const App = (props) => {
  const categories = new Set(data.map((item) => item.category));
  const [dishes, setDishes] = useState(data);
  const menuOptions = ['All', ...categories];
  const filterItems = (category) => {
    if (category === 'All') {
      setDishes(data);
      return;
    }
    setDishes(data.filter((item) => item.category === category));
  };

  return (
    <>
      <main>
        <section className='menu section'></section>
        <Title></Title>
        <Nav categories={menuOptions} filterClick={filterItems}></Nav>
        <MenuRestaurant filteredDishes={dishes} />
      </main>
    </>
  );
};
export default App;
