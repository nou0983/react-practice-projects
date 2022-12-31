export const CART_ACTION_TYPES = {
  SET_ISLOADING: "SET_ISLOADING",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_TOTAL: "SET_TOTAL",
  SET_AMOUNT: "SET_AMOUNT",
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_ISLOADING:
      return { ...state, isLoading: payload };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cart: payload };
    case CART_ACTION_TYPES.SET_TOTAL:
      return { ...state, total: payload };
    case CART_ACTION_TYPES.SET_AMOUNT:
      return { ...state, amount: payload };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};
