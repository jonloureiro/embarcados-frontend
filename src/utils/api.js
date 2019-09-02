import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  timeout: 2000,
});

export default api;