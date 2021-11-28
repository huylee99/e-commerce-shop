import { API } from '.';

const orderRequest = {
  createOrder: data => {
    return API.post('/order/create', data);
  },
};

export default orderRequest;
