import { parseCellChange } from '../../../helpers/sheet.parser';
import dayjs from 'dayjs';

export const parseChange = (change: Json) => {
  const output = parseCellChange(change);

  return output;
};
