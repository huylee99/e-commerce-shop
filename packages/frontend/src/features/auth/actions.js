import store from '../../store';
import { signInSuccess } from './authSlice';
import authRequest from '@/api/authAPI';
import authMessage from '../../constant/authMessage';
import authServices from '../../services/authServices';

const signIn = async (email, password) => {
  const response = await authRequest.signIn(email, password);

  if (response.data.message === authMessage.LOGIN_SUCCESSFULLY) {
    store.dispatch(signInSuccess(response.data));
    authServices.setToken(response.data.token);

    return true;
  } else {
    return false;
  }
};

const signOut = () => {
  authServices.removeToken();

  window.location.href = '/login';
};

export { signIn, signOut };
