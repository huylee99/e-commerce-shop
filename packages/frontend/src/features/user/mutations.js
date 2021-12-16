const mutations = {
  signInSuccess: (state, { payload }) => {
    state.isAuth = true;
    state.user = payload;
  },
  updateUserSuccess: (state, { payload }) => {
    state.user = payload;
  },
  updateAddressSuccess: (state, { payload }) => {
    state.user.addresses = state.user.addresses.map(address =>
      address._id === payload.addressId
        ? (address = payload.updatedAddress)
        : address
    );
  },
  addAddressSuccess: (state, { payload }) => {
    state.addresses.push(payload);
  },
};

export default mutations;
