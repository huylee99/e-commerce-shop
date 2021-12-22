import { memberAPI } from '.';

const discountRequest = {
  applyDiscount: code => {
    return memberAPI.get(`discount/apply?discountCode=${code}`);
  },
};

export default discountRequest;
