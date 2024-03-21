import dayjs from 'dayjs';
import week from 'dayjs/plugin/weekOfYear';

dayjs.extend(week);

export const getCurrentWeek = () => {
  return dayjs().week();
};

export const add = (date: string | number | Date, value: number, unit: any) => {
  return dayjs(date).add(value, unit).format('YYYY-MM-DD');
};

export const today = () => {
  return dayjs().format('YYYY-MM-DD');
};

export const getWeek = (date: string | number | Date) => {
  return dayjs(date).week();
};
