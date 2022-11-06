import { createSelector } from 'reselect';
import { IProducts, IProductsStore } from './types';
import * as raw from './selectors.raw';
import { arrayToOptions, itemsTagsToOptions } from 'shared-base';

export const $i = (state: { products: IProductsStore }) => state.products;

export const $productsTags = createSelector(
    raw.$rawProducts,
    (products: IProducts) => {
        return itemsTagsToOptions(products);
    }
);

export const $status = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['draft', 'published', 'archived']);
});

export const $price = createSelector($i, (_i): IOption[] => {
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

export const $allOptions = createSelector(
    $productsTags,
    $status,
    $price,
    (productsTags, status, price) => {
        return {
            $productsTags: productsTags,
            $status: status,
            $price: price,
        } as IAllSelectOptions;
    }
);
