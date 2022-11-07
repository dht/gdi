import * as raw from './selectors.raw';
import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $ppl = createSelector(base.$ppl, (ppl) => {
    return ppl;
});
