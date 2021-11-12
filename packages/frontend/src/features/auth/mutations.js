const mutations = {
  signInSuccess: (state, { payload }) => {
    state.isAuth = true;
    state.user = payload.user;
  },
};

export default mutations;
