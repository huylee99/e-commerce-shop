import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
