import axios, { AxiosInstance } from 'axios';
import { Json } from '../types';

export let ip = '',
  storageUrl: string = '';

export let instance: AxiosInstance;

export let instanceLocal: AxiosInstance = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: '/boards/',
});

export let instanceLocalhost: AxiosInstance = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: '/boards/',
});

export const initAxios = (baseStorageUrl: string) => {
  getIp();

  instance = axios.create({
    baseURL: baseStorageUrl,
  });

  storageUrl = baseStorageUrl;
};

export const getIp = () => {
  return axios('https://api.ipify.org/?format=json')
    .then((response) => {
      ip = response.data.ip;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const getUrl = (url: string) => {
  return instance.get(url);
};

export const getTranscript = (transcriptId: string): Promise<Json> => {
  const filePath = `/%2Ftranscript-${transcriptId}%2Ftranscript.index.json?alt=media`;

  return instance
    .get(filePath)
    .then((response) => {
      return response.data as Json;
    })
    .catch((error) => {
      console.error('Error:', error);
      return {};
    });
};

export const localRequest = (prompt: string) => {
  return instanceLocal
    .post('/add', {
      prompt,
    })
    .then((response) => {})
    .catch((error) => {
      console.error('Error:', error);
    });
};
