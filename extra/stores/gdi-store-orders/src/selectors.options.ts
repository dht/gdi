import { createSelector } from 'reselect';
import { IOrders, IOrdersStore } from './types';
import * as raw from './selectors.raw';
import { arrayToOptions, itemsTagsToOptions, optionsPeriod } from 'shared-base';
import { minutesThisX } from '@gdi/language';

export const $i = (state: { orders: IOrdersStore }) => state.orders;

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $worth = createSelector($i, (_i): IOption[] => {
    return [
        {
            id: 'm0-20',
            text: '0-20',
            min: 0,
            max: 20,
        },
        {
            id: 'm20-40',
            text: '20-40',
            min: 20,
            max: 40,
        },
        {
            id: 'm40-100',
            text: '40-100',
            min: 40,
            max: 100,
        },
        {
            id: 'm100+',
            text: '100+',
            min: 100,
        },
    ];
});

export const $status = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['incoming', 'processed', 'shipped', 'cancelled']);
});

export const $ordersTags = createSelector(raw.$rawOrders, (orders: IOrders) => {
    return itemsTagsToOptions(orders);
});

export const $allOptions = createSelector(
    $periods,
    $status,
    $worth,
    $ordersTags,
    (periods, status, worth, ordersTags) => {
        return {
            $periods: periods,
            $status: status,
            $worth: worth,
            $ordersTags: ordersTags,
        } as IAllSelectOptions;
    }
);
