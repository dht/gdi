import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { minutesThisX } from '@gdi/language';
import { optionsPeriod } from 'shared-base';

const $i = () => {};

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes);
});

export const $allOptions = createSelector($periods, (periods) => {
    return {
        $periods: periods,
    };
});
