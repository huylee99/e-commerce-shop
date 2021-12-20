import { memberAPI } from '.';

const wishListAPI = {
  toggleWishItem: productId => {
    return memberAPI.post('wishlist/toggle', { productId });
  },
  getWishList: () => {
    return memberAPI.get('wishlist/get');
  },
  deleteItemFromWishList: productId => {
    return memberAPI.delete(`wishlist/delete?productId=${productId}`);
  },
};

export default wishListAPI;
