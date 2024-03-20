import { parseCellChange } from '../../../helpers/sheet.parser';

export const parseChange = (change: Json) => {
  const output = parseCellChange(change);

  return output;
};

export const fixPhone = (phone: string) => {
  return phone.replace(/[^0-9]/g, '');
};

export const smartMerge = (item: Json, matches: Json[]) => {
  const output = { ...item };

  matches.forEach((match) => {
    Object.keys(match).forEach((key) => {
      if (!output[key]) {
        output[key] = match[key];
      }
    });
  });

  return output;
};
