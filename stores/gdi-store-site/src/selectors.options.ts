import { createSelector } from 'reselect';
import { minutesThisX } from '@gdi/language';
import { optionsPeriod } from 'shared-base';

const $i = () => {};

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $allOptions = createSelector($periods, (periods) => {
    return {
        $periods: periods,
    };
});
