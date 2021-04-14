import axios from 'axios';
import cancelInterceptor from './Interceptors/cancelInterceptor';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

http.interceptors.request.use(cancelInterceptor, (error) => Promise.reject(error));

export default http;
