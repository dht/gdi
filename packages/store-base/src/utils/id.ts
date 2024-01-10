import { Json } from '../types';

export const removeId = <T extends Json>(obj: T) => {
  const newObj = { ...obj };

  delete newObj.id;

  return newObj as T;
};

export type NoId<T> = Omit<T, 'id'> & Json;
