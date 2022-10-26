import { createSelector } from 'reselect';
import { IProducts, IProductsStore } from './types';
import * as raw from './selectors.raw';

export const $i = (state: { products: IProductsStore }) => state.products;

export const $productsTags = createSelector(
    raw.$rawProducts,
    (products: IProducts) => {
        const allTags: Record<string, boolean> = {};

        Object.values(products).forEach((person) => {
            const { tags } = person;

            tags.forEach((tag) => {
                allTags[tag] = true;
            });
        });

        return Object.keys(allTags).map((tag) => ({
            id: tag,
            text: tag,
        })) as IOptions;
    }
);

export const $allOptions = createSelector($productsTags, (productsTags) => {
    return {
        $productsTags: productsTags,
    } as IAllSelectOptions;
});
