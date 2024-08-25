import { CartItem } from './../types/index';
import { createSlice } from "@reduxjs/toolkit";

export interface CartState{
  cartItems: CartItem[]
}

const initialState: CartState = {
  cartItems: []
} 

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    updateToCart(state, action) {
      state.cartItems = action.payload;
    },

    emptyToCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, emptyToCart, updateToCart } = cartSlice.actions;

export default cartSlice.reducer;
