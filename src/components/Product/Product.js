import React, { useState } from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider';

function Product( { id, title, image, price, rating, qty } ) {

    const [ , action] = useStateValue();
    const [addedToCart, changeProductStatus] = useState(false);

    const addtoBasket = () => {
      action(
        {
          type: 'ADD_TO_BASKET',
          item: {
             id,
             title,
             image,
             price,
             rating,
             qty: 1
          }
        }
      );

      changeProductStatus(true);
    };

    return (
      <div className="product">
        <img src={image} alt="" />
        <div className="product_info">
          <p className="product_">{title}</p>
          <p className="product_price">
            <small>&#x20b9;</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, index) => {
                return <p className="product_ratingStar" key={index}>&#9733;</p>;
              })}
          </div>
        </div>
        <button disabled={addedToCart} onClick={addtoBasket}>{ addedToCart ? "Added to Basket" : "Add to Basket" }</button>
      </div>
    );
}

export default Product;