import { createSelector } from 'reselect';
import { ICarts, ICartsStore } from './types';
import * as raw from './selectors.raw';

export const $i = (state: { carts: ICartsStore }) => state.carts;

export const $cartsTags = createSelector(raw.$rawCarts, (carts: ICarts) => {
    const allTags: Record<string, boolean> = {};

    Object.values(carts).forEach((person) => {
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

export const $allOptions = createSelector($cartsTags, (cartsTags) => {
    return {
        $cartsTags: cartsTags,
    } as IAllSelectOptions;
});
