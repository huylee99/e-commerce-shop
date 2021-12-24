import { guestAPI, memberAPI } from '.';

const discountRequest = {
  applyDiscount: code => {
    return memberAPI.get(`discount/apply?discountCode=${code}`);
  },
  getDiscount: () => {
    return guestAPI.get('discount/get');
  },
};

export default discountRequest;
