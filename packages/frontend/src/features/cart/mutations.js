import { totalCalculate } from '../../helpers/totalCalculate';
import { discountInitialValue } from '@/constant/initialValues';
const mutations = {
  fetchSuccess: (state, { payload }) => {
    if (payload && payload.cart) {
      state.cart = payload.cart;

      state.subTotal = totalCalculate('price', state.cart);
      state.totalQty = totalCalculate('quantity', state.cart);
      state.discount.amount = parseFloat(
        (state.subTotal * state.discount.percentage) / 100
      ).toFixed(2);
      if (state.subTotal > 35) {
        state.shippingFee = 0;
      } else {
        state.shippingFee = 5;
      }
      state.totalPrice = parseFloat(
        +state.subTotal - state.discount.amount + state.shippingFee
      ).toFixed(2);
    }
  },
  applyDiscountSuccess: (state, { payload }) => {
    if (payload) {
      const { code, _id, percentage } = payload;
      state.discount.percentage = percentage;
      state.discount.amount = parseFloat(
        (state.subTotal * percentage) / 100
      ).toFixed(2);
      state.totalPrice = parseFloat(
        +state.subTotal - state.discount.amount + state.shippingFee
      ).toFixed(2);
      state.discount.isApplied = true;
      state.discount.code = code;
      state.discount._id = _id;
    }
  },
  removeDiscountSuccess: state => {
    state.discount = discountInitialValue;
    state.totalPrice = parseFloat(
      +state.subTotal - state.discount.amount + state.shippingFee
    ).toFixed(2);
  },
};

export default mutations;
