import { useMemo } from 'react';
import * as m from '../utils/language.currency';

export function useCurrency() {
    const methods: M = useMemo(() => {
        return {
            rounded: (value: number) => m.rounded(value),
            full: (value: number) => m.full(value),
        };
    }, []);

    return { m: methods };
}

export type M = {
    rounded: (value: number) => string;
    full: (value: number) => string;
};

export const emptyM: M = {
    rounded: (_value: number) => '',
    full: (_value: number) => '',
};
