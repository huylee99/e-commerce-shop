const mutations = {
  fetchWishListSuccess: (state, { payload }) => {
    state.wishList = payload;
  },
  deleteItemFromWishList: (state, { payload }) => {
    state.wishList.products = state.wishList.products.filter(
      _id => _id !== payload
    );
  },
};

export default mutations;
