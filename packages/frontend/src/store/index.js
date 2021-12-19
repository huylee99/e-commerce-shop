import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';
import wishListReducer from '../features/wishlist/wishListSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishList: wishListReducer,
  },
});

export default store;
