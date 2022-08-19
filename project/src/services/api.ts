import axios, { AxiosInstance } from 'axios';
import { REQUEST_TIMEOUT, URL_API } from '../const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
