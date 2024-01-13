import { Json } from '../types';

export const docSimple = (variables: Json) => {
  let { documentRaw } = variables;

  return {
    content: documentRaw,
    meta: {
      documentType: 'email',
      lengthInstructions: '',
      styleInstructions: '',
      extraInstructions: '',
    },
    tsCreated: Date.now(),
  };
};
