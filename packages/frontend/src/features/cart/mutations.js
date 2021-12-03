import { totalCalculate } from '../../helpers/totalCalculate';

const mutations = {
  fetchSuccess: (state, { payload }) => {
    if (payload && payload.cart) {
      state.cart = payload.cart;

      state.subTotal = totalCalculate('price', state.cart);
      state.totalQty = totalCalculate('quantity', state.cart);
      state.totalPrice = state.subTotal - state.discount;
    }
  },
};

export default mutations;
