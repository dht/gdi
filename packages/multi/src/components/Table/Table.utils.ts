import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ITableField } from '../../types';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(weekOfYear);

dayjs.extend(relativeTime);

export const dateDb = (value: string | Date) => {
  return dayjs(value).format('YYYY-MM-DD');
};

export const dateShort = (value: string | Date) => {
  return dayjs(value).format('MM/DD');
};

export const timeAgo = (value: string | Date) => {
  return dayjs(value).fromNow();
};

export const time = (value: string | Date) => {
  return dayjs(value).format('HH:mm');
};
