import { formatObjects } from './formatObjects';

/*
localeMatcher 'lookup', 'best fit',
type: 'cardinal' | 'ordinal'
*/

export const ordinal = (value: number) => {
    const { suffixes } = formatObjects;
    const rule = formatObjects.plural.select(value);
    const suffix = suffixes.get(rule);
    return `${value}${suffix}`;
};

export const cardinal = (value: number, nouns?: string[][]) => {
    if (!nouns) {
        return String(value);
    }

    const { plural } = formatObjects;
    const rule = plural.select(value);

    const noun = new Map(nouns as any).get(rule);

    return `${value} ${noun}`;
};
