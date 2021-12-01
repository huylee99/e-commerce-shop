import { memberAPI } from '.';

const cartRequest = {
  addItem: product => {
    return memberAPI.put('cart/increase', { product });
  },
  removeItem: product => {
    return memberAPI.put('cart/decrease', { product });
  },
  deleteItem: productId => {
    return memberAPI.delete(`cart/delete?productId=${productId}`);
  },
};

export default cartRequest;
