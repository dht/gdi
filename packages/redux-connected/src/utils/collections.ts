import { get } from 'lodash';

export const mergeCollection = (nodeName: string, data: any, allState: any) => {
  const collectionItemsCurrent = get(allState, nodeName, {});

  return {
    ...collectionItemsCurrent,
    ...data,
  };
};
