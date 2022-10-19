import { useMemo } from 'react';
import { LanguageIso } from '../types';
import * as m from '../utils/language.money';

export function useMoney(forceLanguageId?: LanguageIso) {
    const methods: M = useMemo(() => {
        return {
            format: () => m.format(),
        };
    }, []);

    return { m: methods };
}

export type M = {
    format: () => string;
};

export const emptyM: M = {
    format: () => '',
};
