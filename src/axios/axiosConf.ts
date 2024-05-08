import axios from 'axios';
import { UserStore } from '../store/store';

// Create a new Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});


// Add a request interceptor to set the token in the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = UserStore.getState().token;
    if (token) {
      config.headers['token'] = token;
      console.log(token)
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
