import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

export default function CheckoutProduct({ id, title, image, price, rating }) {
  const [{basket}, action] = useStateValue();

  const removeFromBasket = () => {
    action({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const getBasketItemById = (itemId) => {
    return basket.filter((item) => item.id === itemId)[0];
  }

  const changeQty = (indicator) => {
    action({
      type: 'CHANGE_ITEM_QTY',
      id,
      qtyChange: indicator
    });
  }

  return (
    <div className="checkout_product">
      <img
        className="checkoutProduct_image"
        src={image}
        alt="Checkout Product"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>&#x20b9;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <p className="checkoutProduct_ratingStar" key={index}>&#9733;</p>;
            })}
        </div>
        <div className="checkoutProduct_buttons">
          <button onClick={() => changeQty(-1)}>-</button>
          {getBasketItemById(id).qty}
          <button onClick={() => changeQty(+1)}>+</button>
          <button onClick={removeFromBasket} className="checkoutProduct_removeFromBasketBtn">Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}
