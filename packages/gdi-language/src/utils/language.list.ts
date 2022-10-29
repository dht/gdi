import { formatObjects } from './formatObjects';

/*
localeMatcher: 'lookup' | 'best fit',
type: 'conjunction' | 'disjunction' | 'unit'
style: 'long' | 'short' | 'narrow'
*/

export const conjunction = (items: string[]) => {
    return formatObjects.listConjunction.format(items);
};

export const disjunction = (items: string[]) => {
    return formatObjects.listDisjunction.format(items);
};
