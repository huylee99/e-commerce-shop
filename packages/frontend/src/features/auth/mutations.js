const mutations = {
  signInSuccess: (state, { payload }) => {
    state.isAuth = true;
    state.user = payload;
  },
  verifySuccess: (state, { payload }) => {
    state.isAuth = true;
    state.user = payload;
  },
};

export default mutations;
