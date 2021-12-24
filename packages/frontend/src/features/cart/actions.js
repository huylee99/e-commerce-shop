import store from '../../store';
import cartRequest from '../../api/cartAPI';
import discountRequest from '../../api/discountAPI';
import {
  fetchSuccess,
  applyDiscountSuccess,
  removeDiscountSuccess,
} from './cartSlice';

import { notify } from '../../helpers/toastify';

const increaseQty = async product => {
  try {
    const response = await cartRequest.addItem(product);
    store.dispatch(fetchSuccess(response.data.cart));
    notify(`${product.quantity} item(s) are added to your cart`, 'success');

    return response.data;
  } catch (error) {
    notify('Error, please try again', 'error');
  }
};

const decreaseQty = async product => {
  try {
    const response = await cartRequest.removeItem(product);
    store.dispatch(fetchSuccess(response.data));
    notify('Item is removed from your cart', 'success');
  } catch (error) {
    notify('Error, please try again', 'error');
  }
};

const deleteItem = async productId => {
  try {
    const response = await cartRequest.deleteItem(productId);
    store.dispatch(fetchSuccess(response.data.cart));
  } catch (error) {
    notify('Error, please try again', 'error');
  }
};

const applyDiscount = async code => {
  try {
    const response = await discountRequest.applyDiscount(code);
    const { discount } = response.data;
    const { discountCode, discountValue, _id } = discount;
    store.dispatch(
      applyDiscountSuccess({
        code: discountCode,
        _id,
        percentage: discountValue,
      })
    );
  } catch (error) {
    notify('Error, code is invalid or expired', 'error');
  }
};

const removeDiscount = () => {
  store.dispatch(removeDiscountSuccess());
};

export { increaseQty, decreaseQty, deleteItem, applyDiscount, removeDiscount };
