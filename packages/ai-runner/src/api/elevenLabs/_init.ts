import axios, { AxiosInstance } from 'axios';
import { Json } from '../../types';

export let instance: AxiosInstance;

export const init = (keys: Json) => {
  instance = axios.create({
    baseURL: 'https://api.elevenlabs.io/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use((config: any) => {
    config.headers = {
      ...config.headers,
      'xi-api-key': keys.elevenLabs,
    };
    return config;
  });
};
