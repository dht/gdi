import { get } from 'lodash';
import { config } from '../store/store';

export let user: any,
  uid: string = '',
  isAnonymous: boolean = true,
  isReady: boolean = false,
  scope: string = '';

export const setUser = (value: any) => {
  user = value;
  isAnonymous = get(user, 'isAnonymous', true);
  uid = get(user, 'uid', '');
  scope = get(config, 'adapter.scope', '').replace('${uid}', uid);
  isReady = true;
};

export const getUser = () => {
  return user;
};
