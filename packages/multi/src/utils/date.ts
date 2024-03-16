import dayjs from 'dayjs';
import week from 'dayjs/plugin/weekOfYear';

dayjs.extend(week);

export const getCurrentWeek = () => {
  return dayjs().week();
};
