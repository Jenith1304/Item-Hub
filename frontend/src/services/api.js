import axios from 'axios';

const api = axios.create({
  baseURL: 'https://item-hub-tenk.onrender.com/api'
});

export default api;
