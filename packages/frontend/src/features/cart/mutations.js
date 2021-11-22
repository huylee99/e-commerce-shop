import { totalCalculate } from '../../helpers/totalCalculate';

const mutations = {
  fetchSuccess: (state, { payload }) => {
    state.cart = payload;

    state.totalPrice = totalCalculate('price', payload);
    state.totalQty = totalCalculate('quantity', payload);
  },
};

export default mutations;
