import { parseCellChange } from '../../../helpers/sheet.parser';

export const parseChange = (change: Json) => {
  const output = parseCellChange(change);

  return output;
};

export const fixPhone = (phone: string) => {
  return phone.replace(/[^0-9]/g, '');
};
