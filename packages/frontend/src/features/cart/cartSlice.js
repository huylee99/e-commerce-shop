import { createSlice } from '@reduxjs/toolkit';
import mutations from './mutations';

const initialState = {
  cart: [],
  subTotal: 0,
  totalPrice: 0,
  totalQty: 0,
  discount: 0,
  shippingFee: 10,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ...mutations,
  },
});

export const { fetchSuccess, decreaseQtyStorage, increaseQtyStorage } =
  cartSlice.actions;

export default cartSlice.reducer;
