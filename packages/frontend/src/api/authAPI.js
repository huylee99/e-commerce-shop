import { guestAPI, memberAPI } from '.';

const authRequest = {
  signIn: (email, password) => {
    return guestAPI.post('auth/login', { email, password });
  },
  verify: () => {
    return memberAPI.get('auth/verify');
  },
};

export default authRequest;
