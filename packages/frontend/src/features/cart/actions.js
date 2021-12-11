import store from '../../store';
import cartRequest from '../../api/cartAPI';
import { fetchSuccess } from './cartSlice';

const increaseQty = async product => {
  console.log('🚀 ~ file: actions.js ~ line 6 ~ product', product);
  try {
    const response = await cartRequest.addItem(product);
    store.dispatch(fetchSuccess(response.data.cart));
  } catch (error) {
    console.log(error);
  }
};

const decreaseQty = async product => {
  try {
    const response = await cartRequest.removeItem(product);
    store.dispatch(fetchSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async productId => {
  try {
    const response = await cartRequest.deleteItem(productId);
    store.dispatch(fetchSuccess(response.data.cart));
  } catch (error) {
    console.log(error);
  }
};

export { increaseQty, decreaseQty, deleteItem };
