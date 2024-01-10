import { Json } from '../types';

export const arrayToObject = (array: Json[] = [], keyField: string = 'id') => {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
};
