import React, { useState, useEffect } from 'react';
import FoodItem from '../Food/FoodItem';

const Foods = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/products')
    .then(res => res.json())
      .then(data => {
        console.log("data from database", data);
        setItems(data);
    });
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