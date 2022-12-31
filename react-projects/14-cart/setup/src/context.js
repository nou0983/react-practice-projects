import React, { useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import { CART_ACTION_TYPES, cartReducer } from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const URL = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const INITIAL_STATE = {
  isLoading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cart } = state;

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    setTotal();
    setAmount();
  }, [cart]);

  const fetchItems = async () => {
    try {
      dispatch({ type: CART_ACTION_TYPES.SET_ISLOADING, payload: true });
      const res = await fetch(URL).then((res) => res.json());

      if (res.status < 200 || res.status > 299) {
        throw new Error();
      }

      dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: res });
    } catch (error) {
      console.log(
        error,
        "There was an error while fetching data from the server"
      );
    }
    dispatch({ type: CART_ACTION_TYPES.SET_ISLOADING, payload: false });
  };

  const setTotal = () => {
    const newTotal = cart.reduce((acc, item) => {
      const { price, amount } = item;
      return acc + price * amount;
    }, 0);
    dispatch({
      type: CART_ACTION_TYPES.SET_TOTAL,
      payload: newTotal.toFixed(2),
    });
  };

  const setAmount = () => {
    const newAmount = cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    dispatch({ type: CART_ACTION_TYPES.SET_AMOUNT, payload: newAmount });
  };

  const clearCartItems = () => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: [] });
  };

  const removeCartItem = (id) => {
    const newItems = cart.filter((item) => item.id !== id);
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newItems });
  };

  const increaseAmount = (id) => {
    const newAmount = cart.map((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
      return item;
    });

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: newAmount,
    });
  };

  const decreaseAmount = (id) => {
    const newAmount = cart
      .map((item) => {
        if (item.id === id) {
          item.amount -= 1;
        }
        return item;
      })
      .filter((item) => item.amount !== 0);

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: newAmount,
    });

    // const toggleAmount = (id, type) => {
    //   const newAmount = cart
    //     .map((item) => {
    //       if (item.id === id) {
    //         if (type === "increase") {
    //           item.amount += 1;
    //         } else if (item.id === "decrease") {
    //           item.amount -= 1;
    //         }
    //       }
    //       return item;
    //     })
    //     .filter((item) => item.amount !== 0);

    //   dispatch({
    //     type: CART_ACTION_TYPES.SET_CART_ITEMS,
    //     payload: newAmount,
    //   });
    // };

    // const count = cart.find((item) => item.id === id).amount;

    // if (count > 1) {
    //   const newItems = cart.map((item) => {
    //     if (item.id === id) {
    //       item.amount -= 1;
    //     }
    //     return item;
    //   });

    //   dispatch({
    //     type: CART_ACTION_TYPES.SET_CART_ITEMS,
    //     payload: newItems,
    //   });
    // } else {
    //   removeCartItem(id);
    // }
  };

  const value = {
    ...state,
    clearCartItems,
    removeCartItem,
    increaseAmount,
    decreaseAmount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
