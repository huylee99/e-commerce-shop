import { createSlice } from '@reduxjs/toolkit';
import mutations from './mutations';

const initialState = {
  cart: [],
  subTotal: 0,
  totalPrice: 0,
  totalQty: 0,
  discount: {
    amount: 0,
    percentage: 0,
    code: null,
    isApplied: false,
    _id: null,
  },
  shippingFee: 10,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ...mutations,
  },
});

export const {
  fetchSuccess,
  decreaseQtyStorage,
  increaseQtyStorage,
  applyDiscountSuccess,
  removeDiscountSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;
