import store from '../../store';
import { signInSuccess, verifySuccess, updateSuccess } from './authSlice';
import { fetchSuccess } from '../cart/cartSlice';
import authRequest from '@/api/authAPI';
import userRequest from '../../api/userAPI';
import authServices from '../../services/authServices';

import { notify } from '../../helpers/toastify';
import { UPDATE_SUCCESSFULLY } from '../../constant/responseMessage';

const signIn = async ({ email, password }) => {
  try {
    const response = await authRequest.signIn(email, password);

    store.dispatch(signInSuccess(response.data.user));
    store.dispatch(fetchSuccess(response.data.cart));
    authServices.setToken(response.data.token);
  } catch (error) {
    console.log(error);
  }
};

const signUp = async data => {
  try {
    const response = await userRequest.signUp(data);

    store.dispatch(signInSuccess(response.data.user));
    store.dispatch(fetchSuccess(response.data.cart));
    authServices.setToken(response.data.token);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const signOut = () => {
  authServices.removeToken();
};

const verify = async () => {
  try {
    const response = await authRequest.verify();
    store.dispatch(verifySuccess(response.data.user));
    store.dispatch(fetchSuccess(response.data.cart));
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async data => {
  try {
    const response = await userRequest.update(data);

    if (response.data.message === UPDATE_SUCCESSFULLY) {
      store.dispatch(updateSuccess(response.data.user));
      notify('Update successfully!', 'success');
    }
  } catch (error) {
    notify('Update failed! Please try again!', 'error');
  }
};

const updateShippingInfo = async (addressId, data) => {
  try {
    const response = await userRequest.updateShippingInfo(addressId, data);
    if (response.data.message === UPDATE_SUCCESSFULLY) {
      store.dispatch(updateSuccess(response.data.user));
      notify('Shipping address is updated!', 'success');
    }
  } catch (error) {
    notify('Error! Please try again!', 'error');
  }
};

const addShippingInfo = async data => {
  try {
    const response = await userRequest.addShippingInfo(data);

    if (response.data.message === UPDATE_SUCCESSFULLY) {
      store.dispatch(updateSuccess(response.data.user));
      notify('Shipping address is added!', 'success');
    }
  } catch (error) {
    notify('Error! Please try again!', 'error');
  }
};

export {
  signIn,
  signOut,
  signUp,
  verify,
  updateUser,
  updateShippingInfo,
  addShippingInfo,
};
