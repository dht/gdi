import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);
dayjs.extend(duration);

const DEFAULT_DATE_FORMAT = 'MMM Do, YYYY';

export const date = {
  normal: (date: string | number | Date, format: string = DEFAULT_DATE_FORMAT) => {
    return dayjs(date).format(format);
  },
  short: (date: string | number | Date) => {
    return dayjs(date).format('MMM Do');
  },
  db: (date: string | number | Date) => {
    return dayjs(date).format('YYYY-MM-DD');
  },
  timeShort: (date: string | number | Date) => {
    return dayjs(date).format('ss.SSS');
  },
  daysFromNow: (date: string | number | Date) => {
    return Math.floor(dayjs(date).diff() / 1000 / 60 / 60 / 24);
  },
  duration: (millis: number) => {
    return dayjs.duration(millis).humanize();
  },
  durationMillis: (millis: number) => {
    if (millis === 0) {
      return '-';
    }

    return (millis / 1000).toFixed(2) + 's';
  },
  timeAgo: (date: string | number | Date, withoutAgo?: boolean) => {
    return dayjs(date).fromNow(withoutAgo);
  },
  day: (date: string | number | Date) => {
    return dayjs(date).format('dddd');
  },
  stopwatch: (date: string | number | Date) => {
    return dayjs(date).format('mm:ss');
  },
  googleCalendar: (date: string | number | Date) => {
    return dayjs(date).format('YYYYMMDDTHHmmss');
  },
};
