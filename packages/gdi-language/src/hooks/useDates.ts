import { useMemo } from 'react';
import { LanguageIso } from '../types';
import * as d from '../utils/language.dates';

export function useDates(forceLanguageId?: LanguageIso) {
    const methods: D = useMemo(() => {
        return {
            now: () => d.now(),
        };
    }, []);

    return { d: methods };
}

export type D = {
    now: () => number;
};

export const emptyD: D = {
    now: () => 0,
};
