import store from '../../store';
import {
  signInSuccess,
  updateUserSuccess,
  addAddressSuccess,
  updateAddressSuccess,
  deleteAddressSuccess,
} from './userSlice';
import { fetchSuccess } from '../cart/cartSlice';
import authRequest from '@/api/authAPI';
import userRequest from '../../api/userAPI';
import authServices from '../../services/authServices';

import { notify } from '../../helpers/toastify';
import responseMessage from '../../constant/responseMessage';

const signIn = async ({ email, password }) => {
  try {
    const response = await authRequest.signIn(email, password);

    const { user, cart, addresses, token } = response.data;

    store.dispatch(signInSuccess({ ...user, addresses }));
    store.dispatch(fetchSuccess(cart));
    authServices.setToken(token);
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

    const { user, cart, addresses } = response.data;
    store.dispatch(signInSuccess({ ...user, addresses }));
    store.dispatch(fetchSuccess(cart));
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async data => {
  try {
    const response = await userRequest.update(data);

    const { message, user } = response.data;

    if (message === message.UPDATE_SUCCESSFULLY) {
      store.dispatch(updateUserSuccess(user));
      notify('Update successfully!', 'success');
    }
  } catch (error) {
    notify('Update failed! Please try again!', 'error');
  }
};

const updateAddress = async (addressId, data) => {
  try {
    const response = await userRequest.updateAddress(addressId, data);

    const { updatedAddress, message } = response.data;
    if (message === responseMessage.UPDATE_SUCCESSFULLY) {
      store.dispatch(
        updateAddressSuccess({
          updatedAddress,
          addressId,
        })
      );
      notify('Shipping address is updated!', 'success');
    }
  } catch (error) {
    notify('Error! Please try again!', 'error');
  }
};

const addAddress = async data => {
  try {
    const response = await userRequest.addAddress(data);

    const { newAddress, message } = response.data;

    if (message === responseMessage.CREATE_SUCCESSFULLY) {
      store.dispatch(addAddressSuccess(newAddress));
      notify('Shipping address is added!', 'success');
    }
  } catch (error) {
    notify('Error! Please try again!', 'error');
  }
};

const deleteAddress = async _id => {
  try {
    const response = await userRequest.deleteAddress(_id);

    const { addressId, message } = response.data;

    if (message === responseMessage.UPDATE_SUCCESSFULLY) {
      store.dispatch(deleteAddressSuccess({ _id: addressId }));
      notify('Address removed', 'success');
    }

    return true;
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
  updateAddress,
  addAddress,
  deleteAddress,
};
