import { API } from '.';

const productRequest = {
  getProducts: queries => {
    return API.get(`product/getProducts/${queries}`);
  },
};

export default productRequest;
