import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(weekOfYear);

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
  parts: (date: string | number | Date) => {
    const year = dayjs(date).year();
    const month = dayjs(date).month();
    const day = dayjs(date).date();

    return {
      year,
      yearLz: String(year),
      month,
      monthLz: lz(month),
      day,
      dayLz: lz(day),
    };
  },
  fromParts: (str: string) => {
    try {
      const current = date.parts(Date.now());
      const parts = str.split('-');
      const partsInt = parts.map((i) => parseInt(i, 10));

      switch (parts.length) {
        case 1:
          if (parts[0].startsWith('0')) {
            return `${current.yearLz}-${lz(partsInt[0])}-01`;
          } else {
            return `${current.yearLz}-${current.monthLz}-${lz(partsInt[0])}`;
          }
        case 2:
          return `${current.yearLz}-${lz(partsInt[0])}-${lz(partsInt[1])}`;
        default:
          let year = partsInt[0] < 2000 ? 2000 + partsInt[0] : partsInt[0];
          return `${year}-${lz(partsInt[1])}-${lz(partsInt[2])}`;
      }
    } catch (e) {
      return str;
    }
  },
  weekOfYear: (date: string | number | Date) => {
    return dayjs(date).week();
  },
};

const lz = (num: number) => {
  return num < 10 ? `0${num}` : num;
};
