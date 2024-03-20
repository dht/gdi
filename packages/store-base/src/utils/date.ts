import dayjs from 'dayjs';
import week from 'dayjs/plugin/weekOfYear';

dayjs.extend(week);

export const getCurrentWeek = () => {
  return dayjs().week();
};

export const add = (date: string | number | Date, value: number, unit: any) => {
  return dayjs(date).add(value, unit).format('YYYY-MM-DD');
};
