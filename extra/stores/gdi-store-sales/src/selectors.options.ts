import { createSelector } from 'reselect';
import { ISales, ISalesStore } from './types';
import * as raw from './selectors.raw';

export const $i = (state: { sales: ISalesStore }) => state.sales;

export const $salesTags = createSelector(raw.$rawSales, (sales: ISales) => {
    const allTags: Record<string, boolean> = {};

    Object.values(sales).forEach((person) => {
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

export const $allOptions = createSelector($salesTags, (salesTags) => {
    return {
        $salesTags: salesTags,
    } as IAllSelectOptions;
});
