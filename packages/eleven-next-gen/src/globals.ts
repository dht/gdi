import { AxiosInstance } from 'axios';

export let axiosInstance: AxiosInstance;

export const setInstance = (value: any) => {
  axiosInstance = value;
};
