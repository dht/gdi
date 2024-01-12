import axios, { AxiosInstance } from 'axios';
import { Json } from '../types';

let instance: AxiosInstance,
  apiToken: string = '';

export const initHuggingFace = (baseURL?: string, token?: string) => {
  instance = axios.create({
    baseURL,
  });

  apiToken = token ?? '';
};

export const textToImage = async (data: Json) => {
  const response = await instance.post('', data, {
    headers: {
      Accept: 'image/png',
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    responseType: 'arraybuffer',
  });

  if (response.status === 200) {
    return response.data;
  } else {
    console.error('API request failed with status:', response.status);
  }
};
