import React from 'react';
import { useStateValue } from './StateProvider';

const Basket = () => {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <h2>Your Basket</h2>
      {basket.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;