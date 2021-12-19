import { memberAPI } from '.';

const wishListAPI = {
  toggleWishItem: productId => {
    return memberAPI.post('wishlist/toggle', { productId });
  },
};

export default wishListAPI;
