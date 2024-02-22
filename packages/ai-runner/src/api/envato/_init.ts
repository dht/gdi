import axios, { AxiosInstance } from 'axios';
import { Json } from '../../types';
import * as Envato from 'envato';

export let client: Envato.Client;

export const init = (keys: Json) => {
  if (!keys.envato) {
    return;
  }

  client = new Envato.Client(keys.envato);
};
