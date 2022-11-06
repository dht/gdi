import { createSelector } from 'reselect';
import { ICarts, ICartsStore } from './types';
import * as raw from './selectors.raw';
import { minutesThisX } from '@gdi/language';
import { arrayToOptions, itemsTagsToOptions, optionsPeriod } from 'shared-base';

export const $i = (state: { carts: ICartsStore }) => state.carts;

export const $cartsTags = createSelector(raw.$rawCarts, (carts: ICarts) => {
    return itemsTagsToOptions(carts);
});

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $status = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['draft', 'purchased', 'abandoned']);
});

export const $allOptions = createSelector(
    $periods,
    $status,
    $cartsTags,
    (periods, status, cartsTags) => {
        return {
            $periods: periods,
            $status: status,
            $cartsTags: cartsTags,
        } as IAllSelectOptions;
    }
);
