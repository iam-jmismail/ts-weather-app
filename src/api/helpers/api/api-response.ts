import { AxiosRequestConfig, Method } from "axios";
import { InstanceName, instances } from "./instances";

interface CustomAxiosRequestConfig<T = null> extends AxiosRequestConfig<T> {
  instance: InstanceName;
  method?: Method;
}

const request = <T, D = null>(config: CustomAxiosRequestConfig<D>) => {
  const instance = instances[config.instance];

  return instance.request<T>({
    ...config,
    method: "POST",
    data: config.data,
  });
};

export const get = <T>(config: CustomAxiosRequestConfig) =>
  request<T>({ ...config, method: "GET" });

export const post = <T, D>(config: CustomAxiosRequestConfig, payload: D) =>
  request<T, D>({ ...config, method: "POST", data: payload 
});

export const put = <T, D>(config: CustomAxiosRequestConfig, payload: D) =>
  request<T, D>({ ...config, method: "PUT", data: payload 
});

export const _delete = <T, D>(config: CustomAxiosRequestConfig, payload: D) =>
  request<T, D>({ ...config, method: 'DELETE', data: payload 
});