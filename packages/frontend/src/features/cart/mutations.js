import { totalCalculate } from '../../helpers/totalCalculate';

const mutations = {
  fetchSuccess: (state, { payload }) => {
    if (payload && payload.cart) {
      state.cart = payload.cart;

      state.subTotal = totalCalculate('price', state.cart);
      state.totalQty = totalCalculate('quantity', state.cart);

      if (state.subTotal > 35) {
        state.shippingFee = 0;
      } else {
        state.shippingFee = 5;
      }
      state.totalPrice = parseFloat(
        state.subTotal - state.discount + state.shippingFee
      ).toFixed(2);
    }
  },
};

export default mutations;
