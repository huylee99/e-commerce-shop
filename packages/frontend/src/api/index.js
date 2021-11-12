import axios from 'axios';

const instanceConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const API = axios.create(instanceConfig);

export { API };
