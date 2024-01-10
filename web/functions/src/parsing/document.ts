import { Json } from '../types';
import { docSimple } from './document.utils';

export const $docSimple = (variables: Json) => {
  const document = docSimple(variables);

  return {
    document,
  };
};
