import axios, { AxiosInstance } from 'axios';
import { auth } from './firebase';
import { ToastMethod } from './types';
import { toastMessages } from './data/data.toast';
import { invokeEvent } from 'shared-base';

let baseUrl = '',
  instance: AxiosInstance,
  toastMethod: ToastMethod;

export const initFunctions = (projectId: string, isEmulator: boolean, toast: ToastMethod) => {
  baseUrl = isEmulator
    ? `http://127.0.0.1:5001/${projectId}/us-central1`
    : `https://us-central1-${projectId}.cloudfunctions.net`;

  instance = axios.create({
    baseURL: baseUrl,
  });

  toastMethod = toast;
};

export const runFunction = (path: string, data: Json = {}, method: string = 'post') => {
  return invokeApi(method, path, data);
};

const invokeApi = async (method: string, path: string, data: Json) => {
  const token = await auth.currentUser?.getIdToken();

  const promise = instance({
    method: method,
    url: path,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      contentType: 'application/json',
    },
  })
    .then((response) => {
      return response.data;
      // Handle the response from the Firebase Function
    })
    .catch((error) => {
      invokeEvent('function/error', { path, error });
    });

  const messages = toastMessages[path];

  if (method !== 'GET' && toastMethod && messages) {
    toastMethod(messages, 'promise', promise);
  }

  return promise;
};
