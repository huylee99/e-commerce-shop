import store from '../../store';
import { signInSuccess, verifySuccess } from './authSlice';
import { fetchSuccess } from '../cart/cartSlice';
import authRequest from '@/api/authAPI';
import authServices from '../../services/authServices';

const signIn = async (email, password) => {
  try {
    const response = await authRequest.signIn(email, password);
    store.dispatch(signInSuccess(response.data.user));
    store.dispatch(fetchSuccess(response.data.userCart));
    authServices.setToken(response.data.token);
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
    store.dispatch(fetchSuccess(response.data.cart.cart));
  } catch (error) {
    console.log(error);
  }
};

export { signIn, signOut, verify };
