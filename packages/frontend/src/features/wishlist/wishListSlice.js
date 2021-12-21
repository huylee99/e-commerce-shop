import { createSlice, createSelector } from '@reduxjs/toolkit';
import mutations from './mutations';

const initialState = {
  wishList: null,
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    ...mutations,
  },
});

export const { fetchWishListSuccess, deleteItemFromWishList } =
  wishListSlice.actions;

const selectWishList = state => state.wishList.wishList;
const selectWishListLength = createSelector(selectWishList, wishList =>
  wishList && wishList.products ? wishList.products.length : 0
);

export default wishListSlice.reducer;

export { selectWishListLength };
