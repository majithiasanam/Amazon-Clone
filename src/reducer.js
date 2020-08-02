export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price * item.qty) + amount, 0);

export default function reducer(state, action) {
  let newBasket = [...state.basket];
  let index = 0;
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Can't remove product as id for the given product is not find."
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "CHANGE_ITEM_QTY":
      newBasket = [...state.basket];

      index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      newBasket[index].qty = newBasket[index].qty + action.qtyChange;
      
      if (newBasket[index].qty === 0) {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket
      };
    default:
      return state;
  }
}
