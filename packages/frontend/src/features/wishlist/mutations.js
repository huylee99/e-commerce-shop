const mutations = {
  fetchWishListSuccess: (state, { payload }) => {
    state.wishList = payload;
  },
};

export default mutations;
