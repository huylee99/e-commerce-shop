import store from '../../store';
import cartRequest from '../../api/cartAPI';
import { fetchSuccess } from './cartSlice';

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

export { increaseQty, decreaseQty, deleteItem };
