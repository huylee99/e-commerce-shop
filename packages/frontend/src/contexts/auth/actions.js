import authRequest from '../../api/authAPI';
import authService from '../../services/authServices';
import loginActionTypes from './types';

const login = async (dispatch, { email, password }) => {
  dispatch({ type: loginActionTypes.PENDING });
  try {
    const user = await authRequest.signIn(email, password);
    dispatch({ type: loginActionTypes.RESOLVED, user: user.data.user });
    authService.setToken(user.data.token);

    return user;
  } catch (error) {
    dispatch({ type: loginActionTypes.REJECTED, error });
  }
};

const verify = async dispatch => {
  try {
    const user = await authRequest.verify();
    dispatch({ type: loginActionTypes.RESOLVED, user: user.data });
  } catch (error) {
    dispatch({ type: loginActionTypes.REJECTED, error: null });
  }
};

export { login, verify };
