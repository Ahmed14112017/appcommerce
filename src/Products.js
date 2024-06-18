import React from 'react';
import './Products.css';
import StarIcon from '@mui/icons-material/Star';
import { UseStateValue } from './StateProvider';

export default function Products({ id, image, title, rating , price }) {
  const [state, dispatch] = UseStateValue();

  const addBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating).fill(null).map((_, i) => (
            <p key={i} className="star-icon">
              <StarIcon />
            </p>
          ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={()=>addBasket()}>Add to Basket</button>
    </div>
  );
}
