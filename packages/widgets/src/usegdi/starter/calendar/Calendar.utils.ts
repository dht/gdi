import { parseCellChange } from '../../../helpers/sheet.parser';

export const parseChange = (change: Json) => {
  const output = parseCellChange(change);

  return output;
};
