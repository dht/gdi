import { DateInfo, DateTime, TimePeriod } from '../types';
import { normalize } from './date';
import { formatObjects } from './formatObjects';
import { XDate } from './language.date';
import { deltaInMinutes } from './language.relative';

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

export const ts = () => new Date().getTime();

export const now = () => new Date().getTime();

export const dateShort = (value: DateTime) => {
    const date = normalize(value);

    if (date === null) {
        return '';
    }

    return formatObjects.date.format(date);
};

export const dateLong = (value: DateTime) => {
    const date = normalize(value);

    if (date === null) {
        return '';
    }

    return formatObjects.dateLong.format(date);
};

export const dayOfWeek = (value: DateTime, short?: boolean) => {
    const date = normalize(value);

    if (date === null) {
        return '';
    }

    return short
        ? formatObjects.dayShort.format(date)
        : formatObjects.day.format(date);
};

export const dateDb = (value: DateTime) => {
    const date = normalize(value);

    if (date === null) {
        return '';
    }

    return format(value, 'yyyy-MM-dd');
};

export const dateDbLong = (value: DateTime) => {
    const date = normalize(value);

    if (date === null) {
        return '';
    }

    return format(date, 'yyyy-MM-dd HH:mm:ss');
};

export const dateDbLongInMinutes = (minutes: number) => {
    const date = now();

    const futureDate = add(date, minutes, 'minute');

    if (!futureDate) {
        return '';
    }

    return dateDbLong(futureDate);
};

export const isToday = (value: DateTime) => {
    const now = new Date();
    const date = normalize(value);

    if (date === null) {
        return false;
    }

    return (
        now.getFullYear() === date.getFullYear() &&
        now.getMonth() === date.getMonth() &&
        now.getDate() === date.getDate()
    );
};

export const dayOfYear = (value: DateTime) => {
    const date = normalize(value);

    if (date === null) {
        return;
    }

    const start = new Date(date.getFullYear(), 0, 0);
    const diff =
        date.getTime() -
        start.getTime() +
        (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;

    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    return day;
};

export const weekNumber = (date: DateTime) => {
    const dateNormalized = normalize(date);

    if (!dateNormalized) {
        return;
    }

    const d = new Date(
        Date.UTC(
            dateNormalized.getFullYear(),
            dateNormalized.getMonth(),
            dateNormalized.getDate()
        )
    );

    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};

export const getQuarter = (date: DateTime) => {
    const dateNormalized = normalize(date);

    if (!dateNormalized) {
        return;
    }

    const month = dateNormalized.getMonth() + 1;
    return Math.ceil(month / 3);
};

export const add = (
    value: DateTime,
    valueToAdd: number,
    period: TimePeriod
) => {
    const date = normalize(value);

    if (!date) {
        return;
    }

    const result = new Date(date);

    switch (period) {
        case 'year':
            result.setFullYear(result.getFullYear() + valueToAdd);
            break;
        case 'month':
            result.setMonth(result.getMonth() + valueToAdd);
            break;
        case 'day':
            result.setDate(result.getDate() + valueToAdd);
            break;
        case 'hour':
            result.setHours(result.getHours() + valueToAdd);
            break;
        case 'minute':
            result.setMinutes(result.getMinutes() + valueToAdd);
            break;
        case 'second':
            result.setSeconds(result.getSeconds() + valueToAdd);
            break;
        case 'week':
            result.setDate(result.getDate() + valueToAdd * 7);
            break;
    }

    return result;
};

export const set = (
    value: DateTime,
    valueToSet: number,
    period: TimePeriod
) => {
    const date = normalize(value);

    if (!date) {
        return;
    }

    const result = new Date(date);

    switch (period) {
        case 'year':
            result.setFullYear(valueToSet);
            break;
        case 'month':
            result.setMonth(valueToSet);
            break;
        case 'day':
            result.setDate(valueToSet);
            break;
        case 'hour':
            result.setHours(valueToSet);
            break;
        case 'minute':
            result.setMinutes(valueToSet);
            break;
        case 'second':
            result.setSeconds(valueToSet);
            break;
    }

    return result;
};

export const setTime = (value: DateTime, time: string) => {
    const date = normalize(value);

    if (!date) {
        return;
    }

    const [hours, minutes] = time.split(':').map((x) => parseInt(x, 10));

    const result = new Date(date);
    result.setHours(hours);
    result.setMinutes(minutes);

    return result;
};

export const dateInfo = (value: DateTime): DateInfo | undefined => {
    const date = normalize(value);

    if (!date) {
        return;
    }

    const week = weekNumber(date);
    const year = date.getFullYear();
    const yearShort = date.getFullYear().toString().substring(2, 2);

    return {
        dayOfWeek: date.getDay(),
        dayOfYear: dayOfYear(date),
        week,
        year,
        yearShort,
        quarter: getQuarter(date),
        hour: String(date.getHours()),
        dayOfWeekName: dayOfWeek(date),
        dayOfWeekShortName: dayOfWeek(date, true),
        dateString: dateShort(date),
        dateStringFull: dateDbLong(date),
        dateShortString: dateLong(date),
        weekAndYear: `${week}-${year}`,
        dateStringWeek: dateDb(date) + '-' + week,
        isToday: isToday(date),
    };
};

export const fromWeek = (week: number, year: number, dayOfWeek: number = 0) => {
    const d = new Date(year, 0, 1 + (week - 1) * 7);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1) + dayOfWeek;
    return new Date(d.setDate(diff));
};

const lz = (value: number) => {
    return value < 10 ? `0${value}` : String(value);
};

export const format = (value: DateTime, template: string) => {
    const date = normalize(value);

    if (date === null) {
        return '';
    }

    const replacements: Record<string, string> = {
        yyyy: String(date.getFullYear()),
        MM: lz(date.getMonth() + 1),
        dd: lz(date.getDate()),
        HH: lz(date.getHours()),
        mm: lz(date.getMinutes()),
        ss: lz(date.getSeconds()),
    };

    let output = template;

    for (const key in replacements) {
        output = output.replace(key, replacements[key]);
    }

    return output;
};

export const startOfDay = () => {
    return new XDate() //
        .set(0, 'hour')
        .set(0, 'minute')
        .set(0, 'second');
};

export const startOfWeek = () => {
    return startOfDay().setDayOfWeek(0);
};

export const startOfMonth = () => {
    return startOfDay().set(1, 'day');
};

export const startOfYear = () => {
    return startOfMonth().set(0, 'month');
};

export const minutesThisX = () => {
    return {
        today: deltaInMinutes(startOfDay().value || new Date()),
        week: deltaInMinutes(startOfWeek().value || new Date()),
        month: deltaInMinutes(startOfMonth().value || new Date()),
        year: deltaInMinutes(startOfYear().value || new Date()),
    };
};

export const dateFilename = (suffix: string) => {
    return [dateDb(new Date()), suffix].join('-');
};
