import { get } from 'lodash';

export const isEmpty = (board: Json) => {
  const elements = get(board, 'elements.default');
  return Object.keys(elements ?? {}).length === 0;
};
