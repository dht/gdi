import { useMemo } from 'react';
import { DateTime } from '../types';
import * as d from '../utils/language.dates';

export function useDates() {
    const methods: D = useMemo(() => {
        return {
            now: () => d.now(),
            dateShort: (date: DateTime) => d.dateShort(date),
            dateLong: (date: DateTime) => d.dateLong(date),
            dateDb: (date: DateTime) => d.dateDb(date),
            dateDbLong: (date: DateTime) => d.dateDbLong(date),
            dayOfWeek: (date: DateTime, short?: boolean) => d.dayOfWeek(date, short), // prettier-ignore
        };
    }, []);

    return { d: methods };
}

export type D = {
    now: () => number;
    dateShort: (date: DateTime) => string;
    dateLong: (date: DateTime) => string;
    dateDb: (date: DateTime) => string;
    dateDbLong: (date: DateTime) => string;
    dayOfWeek: (date: DateTime, short?: boolean) => string;
};

export const emptyD: D = {
    now: () => 0,
    dateShort: (_date: DateTime) => '',
    dateLong: (_date: DateTime) => '',
    dateDb: (_date: DateTime) => '',
    dateDbLong: (_date: DateTime) => '',
    dayOfWeek: (_date: DateTime, _short?: boolean) => '',
};
