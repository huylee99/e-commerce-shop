import { guestAPI, memberAPI } from '.';

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
  signUp: data => {
    return guestAPI.post('user/register', { ...data });
  },
  updatePassword: data => {
    return memberAPI.put('user/updatePassword', { ...data });
  },
};

export default userRequest;
