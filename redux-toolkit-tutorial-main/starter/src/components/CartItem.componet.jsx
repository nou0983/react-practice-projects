import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";
import { removeItem, toggleAmount } from "../features/cart/cartSlice";

const CartItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(toggleAmount({ id, type: "increase" }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => dispatch(toggleAmount({ id, type: "decrease" }))}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
