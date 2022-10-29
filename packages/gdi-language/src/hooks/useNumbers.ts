import { useMemo } from 'react';
import * as n from '../utils/language.numbers';
import * as p from '../utils/language.plural';
import * as l from '../utils/language.list';

export function useNumbers() {
    const methods: N = useMemo(() => {
        return {
            rounded: (value: number) => n.rounded(value),
            full: (value: number) => n.full(value),
            ordinal: (value: number) => p.ordinal(value),
            cardinal: (value: number, nouns: string[][]) => p.cardinal(value, nouns), // prettier-ignore
            conjunction: (items: string[]) => l.conjunction(items),
            disjunction: (items: string[]) => l.disjunction(items),
        };
    }, []);

    return { n: methods };
}

export type N = {
    rounded: (value: number) => string;
    full: (value: number) => string;
    ordinal: (value: number) => string;
    cardinal: (value: number, nouns: string[][]) => string;
    conjunction: (items: string[]) => string;
    disjunction: (items: string[]) => string;
};

export const emptyN: N = {
    rounded: (_value: number) => '',
    full: (_value: number) => '',
    ordinal: (_value: number) => '',
    cardinal: (_value: number, _nouns: string[][]) => '',
    conjunction: (_items: string[]) => '',
    disjunction: (_items: string[]) => '',
};
