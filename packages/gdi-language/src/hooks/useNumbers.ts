import { useMemo } from 'react';
import { LanguageIso } from '../types';
import * as n from '../utils/language.money';

export function useNumbers(forceLanguageId?: LanguageIso) {
    const methods: N = useMemo(() => {
        return {
            format: () => n.format(),
        };
    }, []);

    return { n: methods };
}

export type N = {
    format: () => string;
};

export const emptyN: N = {
    format: () => '',
};
