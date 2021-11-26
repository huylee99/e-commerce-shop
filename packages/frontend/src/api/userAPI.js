import { API } from '.';

const userRequest = {
  update: ({ _id, data }) => {
    return API.put('user/update', { _id, data });
  },
  updateShippingInfo: (idList, data) => {
    return API.put('user/updateShippingInfo', { idList, data });
  },
  addShippingInfo: (uid, data) => {
    return API.put('user/addShippingInfo', { uid, data });
  },
};

export default userRequest;
