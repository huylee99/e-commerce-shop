import axios from 'axios';

const commonInstance = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const authInstance = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const guestAPI = axios.create(commonInstance);
const memberAPI = axios.create(authInstance);

memberAPI.interceptors.request.use(
  request => {
    if (localStorage.getItem('accessToken')) {
      request.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'accessToken'
      )}`;
    } else {
      throw new Error('Unauthorized!');
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

export { guestAPI, memberAPI };
