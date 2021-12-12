import store from '../../store';
import { signInSuccess, verifySuccess, updateSuccess } from './authSlice';
import { fetchSuccess } from '../cart/cartSlice';
import authRequest from '@/api/authAPI';
import userRequest from '../../api/userAPI';
import authServices from '../../services/authServices';

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

    store.dispatch(updateSuccess(response.data.user));
  } catch (error) {
    throw Error('Update error');
  }
};

const updateShippingInfo = async (addressId, data) => {
  try {
    const response = await userRequest.updateShippingInfo(addressId, data);

    store.dispatch(updateSuccess(response.data.user));
  } catch (error) {
    throw Error('Update error');
  }
};

const addShippingInfo = async data => {
  try {
    const response = await userRequest.addShippingInfo(data);

    store.dispatch(updateSuccess(response.data.user));
  } catch (error) {
    throw Error('Update failed');
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
