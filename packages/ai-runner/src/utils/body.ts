import { normalizeJson } from './object';

export const parseBodyData = (req: any, fields: string[]) => {
  const output: Json = {};

  fields.forEach((field) => {
    if (req.body[field]) {
      output[field] = req.body[field];
    }
  });

  return normalizeJson(output);
};
