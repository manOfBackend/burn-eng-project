import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create();

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export const http: HttpClient = axiosInstance;

http.interceptors.response.use(res => res.data);

http.interceptors.request.use((config) => {
  if (!config.headers) return config;

  const sessionToken = Cookies.get('__session');

  if (sessionToken !== null) {
    config.headers.Authorization = `Bearer ${sessionToken}`;
  }

  return config;
});