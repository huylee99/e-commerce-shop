import { API } from '.';

const productRequest = {
  getProducts: queries => {
    return API.get(`product/getProducts/${queries}`);
  },
  getProductById: id => {
    return API.get(`product/get?id=${id}`);
  },
};

export default productRequest;
