import { guestAPI } from '.';

const productRequest = {
  getProducts: queries => {
    return guestAPI.get(`product/getProducts/${queries}`);
  },
  getProductById: id => {
    return guestAPI.get(`product/get?id=${id}`);
  },
};

export default productRequest;
