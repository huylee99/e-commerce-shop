import { createSlice } from '@reduxjs/toolkit';
import mutations from './mutations';

const initialState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    ...mutations,
  },
});

export const {
  signInSuccess,
  updateUserSuccess,
  updateAddressSuccess,
  addAddressSuccess,
  deleteAddressSuccess,
} = authSlice.actions;

export default authSlice.reducer;
