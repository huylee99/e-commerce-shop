import { API } from '.';

const authRequest = {
  signIn: (email, password) => {
    return API.post('auth/login', { email, password });
  },
  verify: () => {
    return API.get('auth/verify', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  },
};

export default authRequest;
