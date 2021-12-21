import store from '../../store';

import wishListAPI from '../../api/wishListAPI';
import { notify } from '../../helpers/toastify';
import responseMessage from '../../constant/responseMessage';
import { fetchWishListSuccess, deleteItemFromWishList } from './wishListSlice';

const toggleWishItem = async productId => {
  try {
    const response = await wishListAPI.toggleWishItem(productId);

    const { wishList, message } = response.data;
    store.dispatch(fetchWishListSuccess(wishList));
    if (
      message === responseMessage.CREATE_SUCCESSFULLY ||
      message === responseMessage.UPDATE_SUCCESSFULLY
    ) {
      notify('Item is added to your wish list', 'success');
    } else {
      store.dispatch(fetchWishListSuccess(wishList));
      notify('Item is removed from your wish list', 'success');
    }
  } catch (error) {
    notify('Error, please try again!', 'error');
  }
};

const deleteFromWishList = async _id => {
  try {
    const response = await wishListAPI.deleteItemFromWishList(_id);

    const { message, productId } = response.data;

    if (message === responseMessage.DELETE_SUCCESSFULLY) {
      store.dispatch(deleteItemFromWishList(productId));
      notify('Item is removed from wish list', 'success');

      return response;
    }
  } catch (error) {
    notify('Error, please try again!', 'error');
  }
};

export { toggleWishItem, deleteFromWishList };
