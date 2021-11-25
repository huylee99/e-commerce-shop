import { createSlice } from '@reduxjs/toolkit';
import mutations from './mutations';

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQty: 0,
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
