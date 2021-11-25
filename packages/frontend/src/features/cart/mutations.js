import { totalCalculate } from '../../helpers/totalCalculate';

const mutations = {
  fetchSuccess: (state, { payload }) => {
    state.cart = payload.cart;

    state.totalPrice = totalCalculate('price', state.cart);
    state.totalQty = totalCalculate('quantity', state.cart);
  },
};

export default mutations;
