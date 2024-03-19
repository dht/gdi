import { parseCellChange } from '../../../helpers/sheet.parser';
import { format } from '@gdi/ui';
import dayjs from 'dayjs';

export const parseChange = (change: Json) => {
  const output = parseCellChange(change);

  const { date } = output;

  if (date) {
    let newDate = format.date.fromParts(date);
    output['date'] = newDate;
    output['week'] = format.date.weekOfYear(newDate);
  }

  return output;
};
