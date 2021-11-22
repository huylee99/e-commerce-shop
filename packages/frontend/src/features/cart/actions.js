import store from '../../store';
import cartRequest from '../../api/cartAPI';
import { fetchSuccess } from './cartSlice';

const increaseQty = async (uid, product) => {
  try {
    const response = await cartRequest.addItem(uid, product);
    store.dispatch(fetchSuccess(response.data.cart.cart));
  } catch (error) {
    console.log(error);
  }
};

const decreaseQty = async (uid, product) => {
  try {
    const response = await cartRequest.removeItem(uid, product);
    store.dispatch(fetchSuccess(response.data.cart));
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (uid, productId) => {
  try {
    const response = await cartRequest.deleteItem(uid, productId);
    store.dispatch(fetchSuccess(response.data.cart.cart));
  } catch (error) {
    console.log(error);
  }
};

export { increaseQty, decreaseQty, deleteItem };
