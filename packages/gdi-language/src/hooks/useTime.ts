import { useMemo } from 'react';
import { LanguageIso } from '../types';
import * as h from '../utils/language.time';

export function useTime(forceLanguageId?: LanguageIso) {
    const methods: H = useMemo(() => {
        return {
            now: () => h.format(new Date()),
            time: (date: DateTime) => h.format(date),
        };
    }, []);

    return { h: methods };
}

export type H = {
    now: () => string;
    time: (date: Date) => string;
};

export const emptyH: H = {
    now: () => '',
    time: (date: Date) => '',
};
