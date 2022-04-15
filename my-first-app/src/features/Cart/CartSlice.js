import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  hidden: true,
  cartItems: 0,
  itemsInCart: [],
  quantity: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {},
    removeAll: (state) => {
      state.cartItems = 0;
      state.itemsInCart = [];
      state.totalCount = 0;
    },
    addToCart(state, action) {
      state.itemsInCar = state.itemsInCart.push(action.payload);
      state.cartItems += 1;
      state.totalCount += action.payload.price;
    },
    showCart: (state) => {
      state.hidden = !state.hidden;
    },
  },
});
export const { showCart, addToCart, removeAll, removeItem } = cartSlice.actions;

export default cartSlice.reducer;