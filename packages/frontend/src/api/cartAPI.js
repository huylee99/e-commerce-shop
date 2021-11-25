import { API } from '.';

const cartRequest = {
  addItem: (uid, product) => {
    return API.put('cart/increase', { uid, product });
  },
  removeItem: (uid, product) => {
    return API.put('cart/decrease', { uid, product });
  },
  deleteItem: (uid, productId) => {
    return API.delete(`cart/delete?uid=${uid}&productId=${productId}`);
  },
};

export default cartRequest;
