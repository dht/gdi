import { Json } from '../types';

export const cleanUndefined = (obj: any): typeof obj => {
  const output: Json = {};

  for (let key of Object.keys(obj)) {
    const value = obj[key as keyof typeof obj];

    if (typeof value === 'object') {
      output[key] = cleanUndefined(value);
    } else if (value !== undefined) {
      output[key] = value;
    }
  }

  return output;
};

export const arrayToObject = (array: Json[], keyField: string = 'id') => {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
};

export const cleanObject = (obj: Json) => {
  const output: Json = {};

  for (let key of Object.keys(obj)) {
    output[key] = obj[key];
  }

  return output;
};
