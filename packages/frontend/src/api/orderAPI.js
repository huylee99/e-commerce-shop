import { guestAPI, memberAPI } from '.';

const orderRequest = {
  createOrder: data => {
    return memberAPI.post('/order/create', data);
  },
  getOrder: orderId => {
    return guestAPI.get(`/order/get?orderId=${orderId}`);
  },
  checkOrder: orderId => {
    return memberAPI.get(`/order/verifyOrder?orderId=${orderId}`);
  },
};

export default orderRequest;
