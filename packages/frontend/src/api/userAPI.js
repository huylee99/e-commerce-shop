import { memberAPI } from '.';

const userRequest = {
  update: data => {
    return memberAPI.put('user/update', { data });
  },
  updateShippingInfo: (addressId, data) => {
    return memberAPI.put('user/updateShippingInfo', { addressId, data });
  },
  addShippingInfo: data => {
    return memberAPI.put('user/addShippingInfo', { data });
  },
};

export default userRequest;
