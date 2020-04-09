import React, { useState, useEffect } from 'react';
import foods from '../../fakeData/fakeData';
import FoodItem from '../Food/FoodItem';

const Foods = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
      setItems(foods)
  }, [])
  return (
    <div className="container">
      <div className="row food-items">
      {items.map(item => <FoodItem key={item.key} item={item} />)}
    </div>
    </div>
  );
};

export default Foods;