import { API } from '.';

const authRequest = {
  signIn: (email, password) => {
    return API.post('auth/login', { email, password });
  },
};

export default authRequest;
