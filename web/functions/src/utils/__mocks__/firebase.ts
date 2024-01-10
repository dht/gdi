import { Json } from '../../types';
import { get, set, merge } from 'lodash';

let data = {};

export const firestore = {
  doc: (path: string) => {
    return {
      get: () => {
        return Promise.resolve({
          data: () => {
            return get(data, path);
          },
        });
      },
      set: async (json: Json, options: Json) => {
        const currentData = get(data, path);
        data = set(data, path, merge(currentData, json));
      },
    };
  },
};
