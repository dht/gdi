import axios, { AxiosInstance } from 'axios';
import { auth } from './firebase';
import { ToastMethod } from './types';
import { toastMessages } from './data/data.toast';
import { invokeEvent } from 'shared-base';

let baseUrl = '',
  instance: AxiosInstance,
  toastMethod: ToastMethod,
  params: Params;

type Params = {
  projectId: string;
  isEmulator: boolean;
  isLocalInstance: boolean;
  localInstanceUrl: string;
  toast: ToastMethod;
};

export const initFunctions = (_params: Params) => {
  const { projectId, isEmulator, isLocalInstance, localInstanceUrl, toast } = _params;

  params = _params;

  baseUrl = isEmulator
    ? `http://127.0.0.1:5001/${projectId}/us-central1`
    : `https://us-central1-${projectId}.cloudfunctions.net`;

  if (isLocalInstance && localInstanceUrl) {
    baseUrl = localInstanceUrl;
  }

  instance = axios.create({
    baseURL: baseUrl,
  });

  toastMethod = toast;
};

export const runFunction = (
  path: string,
  data: Json = {},
  method: string = 'post',
  stream: boolean = false
) => {
  console.log('data ->', data);

  return invokeApi(method, path, data, stream);
};

const invokeApi = async (method: string, path: string, data: Json, stream: boolean = false) => {
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
    responseType: stream ? 'stream' : 'json',
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
