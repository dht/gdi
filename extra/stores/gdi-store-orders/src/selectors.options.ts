import { createSelector } from 'reselect';
import { IOrders, IOrdersStore } from './types';
import * as raw from './selectors.raw';

export const $i = (state: { orders: IOrdersStore }) => state.orders;

export const $ordersTags = createSelector(raw.$rawOrders, (orders: IOrders) => {
    const allTags: Record<string, boolean> = {};

    Object.values(orders).forEach((person) => {
        const { tags } = person;

        tags.forEach((tag) => {
            allTags[tag] = true;
        });
    });

    return Object.keys(allTags).map((tag) => ({
        id: tag,
        text: tag,
    })) as IOptions;
});

export const $allOptions = createSelector($ordersTags, (ordersTags) => {
    return {
        $ordersTags: ordersTags,
    } as IAllSelectOptions;
});
