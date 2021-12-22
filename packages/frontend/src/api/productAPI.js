import { guestAPI } from '.';

const productRequest = {
  getProducts: (queries = '') => {
    return guestAPI.get(`product/getProducts${queries}`);
  },
  getProductByCode: code => {
    return guestAPI.get(`product/getByCode?code=${code}`);
  },
};

export default productRequest;
