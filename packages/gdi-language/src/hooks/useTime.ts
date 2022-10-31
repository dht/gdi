import { useMemo } from 'react';
import * as h from '../utils/language.time';
import * as r from '../utils/language.relative';
import { DateTime } from '../types';

export function useTime() {
    const methods: H = useMemo(() => {
        return {
            time: (date: DateTime) => h.time(date),
            timeDifference: (
                value: number,
                unit: Intl.RelativeTimeFormatUnit
            ) => {
                return r.timeDifference(value, unit);
            },
            timeAgo: (date: DateTime) => r.timeAgo(date),
            duration: (seconds: number) => r.duration(seconds),
        };
    }, []);

    return { h: methods };
}

export type H = {
    time: (date: Date) => string;
    timeDifference: (
        value: number,
        unit: Intl.RelativeTimeFormatUnit
    ) => string;
    timeAgo: (date: Date) => string | undefined;
    duration: (seconds: number) => string;
};

export const emptyH: H = {
    time: (_date: Date) => '',
    timeDifference: (_value: number, _unit: Intl.RelativeTimeFormatUnit) => '',
    timeAgo: (_date: Date) => '',
    duration: (seconds: number) => '',
};
