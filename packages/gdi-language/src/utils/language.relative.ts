import {
    IDuration,
    IInterval,
    IWorkdayConfig,
    SecondsPerTimePeriod,
    TimePeriod,
} from '../types';
import { normalize } from './date';
import { formatObjects } from './formatObjects';

/*
localeMatcher: 'best fit' | 'lookup',
numeric: 'always' | 'auto',
style: 'long' | 'short' | 'narrow'
*/

const periods: TimePeriod[] = [
    'year',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
];

const lettersPerPeriod: Record<TimePeriod, string> = {
    year: 'y',
    month: 'm',
    week: 'w',
    day: 'd',
    hour: 'h',
    minute: 'm',
    second: 's',
};

export const timeDifference = (
    value: number,
    unit: Intl.RelativeTimeFormatUnit
) => {
    return formatObjects.relative.format(value, unit);
};

export const duration = (seconds: number) => {
    const output: string[] = [];

    const d = toDuration(seconds);

    const largestIndex = periods.findIndex((period) => (d[period] ?? 0) > 0);

    let trimBelow: TimePeriod | null = null;

    if (largestIndex < 4) {
        trimBelow = 'minute';
    }

    [...periods].splice(largestIndex).forEach((period) => {
        const index = periods.findIndex((p) => p === period);
        const indexTrim = periods.findIndex((p) => p === trimBelow);
        const value = d[period];
        let letter = lettersPerPeriod[period];

        if (index < indexTrim || indexTrim === -1) {
            output.push(`${value}${letter}`);
        }
    });

    return output.join(' ');
};

export const intervalToDuration = (interval: IInterval) => {
    const { start, end } = interval;
    const startNormalized = normalize(start);
    const endNormalized = normalize(end);

    if (!startNormalized || !endNormalized) {
        return;
    }

    const seconds =
        (endNormalized.getTime() - startNormalized.getTime()) / 1000;

    return toDuration(seconds);
};

export const getSecondsPerPeriod = (
    workdayConfig?: IWorkdayConfig
): SecondsPerTimePeriod => {
    const { hoursPerDay = 24, daysPerWeek = 7 } = workdayConfig ?? {};

    return {
        second: 1,
        minute: 60,
        hour: 60 * 60,
        day: hoursPerDay * 60 * 60,
        week: daysPerWeek * hoursPerDay * 60 * 60,
        month: 30 * hoursPerDay * 60 * 60,
        year: 365 * hoursPerDay * 60 * 60,
    };
};

export const toDuration = (seconds: number, workdayConfig?: IWorkdayConfig) => {
    const output: Partial<IDuration> = {};

    let acc = seconds;

    const secondsPerPeriod = getSecondsPerPeriod(workdayConfig);

    periods.forEach((period) => {
        output[period] = Math.floor(acc / secondsPerPeriod[period]);
        acc -= (output[period] ?? 0) * secondsPerPeriod[period];
    });

    return output;
};

const dividers: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, 'second'],
    [60 * 60, 'minute'],
    [60 * 60 * 24, 'hour'],
    [60 * 60 * 24 * 7, 'day'],
    [60 * 60 * 24 * 30, 'week'],
    [60 * 60 * 24 * 365, 'month'],
];

export const timeAgo = (value: DateTime) => {
    const date = normalize(value);

    if (!date || date.toString() === 'Invalid Date') {
        return '';
    }

    const delta = deltaInSeconds(date);
    const deltaAbs = Math.abs(deltaInSeconds(date));

    let prevDivider: [number, string] = [1, ''];

    for (let index in dividers) {
        const divider = dividers[index];

        if (deltaAbs < divider[0]) {
            return timeDifference(
                Math.floor(delta / prevDivider[0]),
                divider[1]
            );
        }

        prevDivider = divider;
    }
};

export const deltaInSeconds = (date: Date) => {
    if (!date || date.toString() === 'Invalid Date') {
        return 0;
    }

    const now = new Date().getTime();
    const delta = date.getTime() - now;

    return Math.floor(delta / 1000);
};

export const deltaInMinutes = (date: Date = new Date()) => {
    if (!date) {
        return 0;
    }

    return deltaInSeconds(date) / 60;
};

export const deltaInYears = (date: Date = new Date()) => {
    if (!date) {
        return 0;
    }

    return deltaInMinutes(date) / 60 / 24 / 365;
};

export const isBefore = (date1: DateTime, date2: DateTime) => {
    return date1 < date2;
};

export const isAfter = (date1: DateTime, date2: DateTime) => {
    return date1 > date2;
};
