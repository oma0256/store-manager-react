import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oma-store-manager-api.herokuapp.com/api/v2/'
});

export default axiosInstance;
