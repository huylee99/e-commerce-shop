import store from '../../store';

import wishListAPI from '../../api/wishListAPI';
import { notify } from '../../helpers/toastify';
import responseMessage from '../../constant/responseMessage';
import { fetchWishListSuccess } from './wishListSlice';

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

export { toggleWishItem };
