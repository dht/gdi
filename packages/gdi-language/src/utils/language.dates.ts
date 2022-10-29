import { DateTime } from '../types';
import { normalize } from './date';
import { formatObjects } from './formatObjects';

/*
  weekday: 'narrow' | 'short' | 'long',
  era: 'narrow' | 'short' | 'long',
  year: 'numeric' | '2-digit',
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
  day: 'numeric' | '2-digit',
  hour: 'numeric' | '2-digit',
  minute: 'numeric' | '2-digit',
  second: 'numeric' | '2-digit',
  timeZoneName: 'short' | 'long',

  // Time zone to express it in
  timeZone: 'Asia/Shanghai',
  // Force 12-hour or 24-hour
  hour12: true | false,

  // Rarely-used options
  hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
  formatMatcher: 'basic' | 'best fit'
*/

/*
localeMatcher: 'best fit' | 'lookup',
numeric: 'always' | 'auto',
style: 'long' | 'short' | 'narrow'
*/

export const now = () => new Date().getTime();

export const dateShort = (date: DateTime) => {
    return formatObjects.date.format(normalize(date));
};

export const dateLong = (date: DateTime) => {
    return formatObjects.dateLong.format(normalize(date));
};

export const dayOfWeek = (date: DateTime, short?: boolean) => {
    if (short) {
        return formatObjects.dayShort.format(normalize(date));
    } else {
        return formatObjects.day.format(normalize(date));
    }
};

export const dateDb = (date: DateTime) => {
    return format(date, 'yyyy-MM-dd');
};

export const dateDbLong = (date: DateTime) => {
    return format(date, 'yyyy-MM-dd HH:mm:ss');
};

const lz = (value: number) => {
    return value < 10 ? `0${value}` : String(value);
};

export const format = (date: DateTime, template: string) => {
    const _date = normalize(date);

    if (!_date) {
        return '';
    }

    const replacements: Record<string, string> = {
        yyyy: String(_date.getFullYear()),
        MM: lz(_date.getMonth() + 1),
        dd: lz(_date.getDate()),
        HH: lz(_date.getHours()),
        mm: lz(_date.getMinutes()),
        ss: lz(_date.getSeconds()),
    };

    let output = template;

    for (const key in replacements) {
        output = output.replace(key, replacements[key]);
    }

    return output;
};
