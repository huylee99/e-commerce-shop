import { guestAPI, memberAPI } from '.';

const userRequest = {
  update: data => {
    return memberAPI.put('user/update', { data });
  },
  updateAddress: (addressId, data) => {
    return memberAPI.put('user/updateAddress', { addressId, data });
  },
  addAddress: data => {
    return memberAPI.post('user/addAddress', data);
  },
  signUp: data => {
    return guestAPI.post('user/register', data);
  },
  updatePassword: data => {
    return memberAPI.put('user/updatePassword', { ...data });
  },
};

export default userRequest;
