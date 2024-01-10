import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ITableField } from './Table.types';

dayjs.extend(relativeTime);

export const dateDb = (value: string | Date) => {
  return dayjs(value).format('yyyy-MM-dd');
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
