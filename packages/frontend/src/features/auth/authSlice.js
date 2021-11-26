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

export const { signInSuccess, verifySuccess, updateSuccess } =
  authSlice.actions;

export default authSlice.reducer;
