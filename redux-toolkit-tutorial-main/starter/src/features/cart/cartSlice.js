import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const INITIAL_CART_STATE = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_CART_STATE,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== payload
      );
      state.cartItems = newCartItems;
    },
    toggleAmount: (state, { payload }) => {
      const { id, type } = payload;
      const specificItem = state.cartItems.find((item) => item.id === id);

      if (type === "increase") {
        specificItem.amount++;
      } else if (type === "decrease") {
        specificItem.amount--;
        state.cartItems = state.cartItems.filter((item) => item.amount !== 0);
      }
    },
    calculateAmountTotals: (state) => {
      const { amount, total } = state.cartItems.reduce(
        (acc, item) => {
          acc.amount += item.amount;
          acc.total += item.amount * item.price;
          return acc;
        },
        { amount: 0, total: 0 }
      );
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, { payload }) => {
        state.cartItems = payload;
        state.isLoading = false;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, toggleAmount, calculateAmountTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
