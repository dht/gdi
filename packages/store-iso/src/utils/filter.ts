import { pickBy } from 'lodash';
import { Json } from '../types.iso';

export const pickByField = <T>(
  obj: Record<string, T>,
  field: keyof T,
  value: any,
  allowEmpty: boolean = false
) => {
  return pickBy(obj, (item) => {
    const val = item[field];
    return val === value || (allowEmpty && !val);
  });
};
