import React from "react";
import CartItem from "./CartItem.componet";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount, isLoading } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        {amount < 1 && <h4 className="empty-cart">is currently empty</h4>}
      </header>
      {amount >= 1 && (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
