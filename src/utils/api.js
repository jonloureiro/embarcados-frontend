import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8080',
  withCredentials: true,
  timeout: 2000,
});

export default api;