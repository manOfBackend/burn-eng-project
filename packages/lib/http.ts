import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { env } from './env.mjs'

const axiosInstanceWithAuth = axios.create();
const axiosInstanceWithoutAuth = axios.create();

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export const httpWithAuth: HttpClient = axiosInstanceWithAuth;
export const http: HttpClient = axiosInstanceWithoutAuth;

const MOCK_API_URL = 'http://localhost:3000'

httpWithAuth.interceptors.response.use(res => res.data);

httpWithAuth.interceptors.request.use((config) => {
  if (!config.headers) return config;
  config.baseURL = env.NEXT_PUBLIC_IS_USE_MOCK ? MOCK_API_URL : env.NEXT_PUBLIC_API_URL;
  const sessionToken = Cookies.get('__session');

  if (sessionToken) {
    config.headers.Authorization = `Bearer ${sessionToken}`;
  }

  return config;
});

http.interceptors.response.use(res => res.data);

http.interceptors.request.use((config) => {
  if (!config.headers) return config;
  config.baseURL = env.NEXT_PUBLIC_IS_USE_MOCK ? MOCK_API_URL : env.NEXT_PUBLIC_API_URL;
  return config;
});