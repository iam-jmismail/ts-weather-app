import axios, { AxiosInstance, AxiosResponse } from "axios";

/**
 * Interceptor functions
 */

const responseInterceptor = (response: AxiosResponse<any, any>) => {
  return response.data;
};

const errorInterceptor = (error: any) => {
  return error.response ? error.response.data : "Something went wrong";
};

/**
 * JSONPlaceHolderInstance
 * https://jsonplaceholder.typicode.com
 */

const jph_instance: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors
jph_instance.interceptors.response.use(responseInterceptor, errorInterceptor);

export { jph_instance };
