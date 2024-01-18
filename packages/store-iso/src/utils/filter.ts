import { pickBy } from 'lodash';

export const pickByField = (obj: any, field: string, value: any, allowEmpty: boolean = false) => {
  return pickBy(obj, (item) => {
    const val = item[field];
    return val === value || (allowEmpty && !val);
  });
};
