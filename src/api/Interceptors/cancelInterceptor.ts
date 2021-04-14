import { requestStore } from '@/store';
import axios, { AxiosRequestConfig } from 'axios';

const cancelInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const source = axios.CancelToken.source();
  config.cancelToken = source.token;
  requestStore.addCancelToken(source);
  return config;
};

export default cancelInterceptor;
