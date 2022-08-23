import * as raw from './selectors.raw';
import * as base from './selectors.base';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';

type Option = {
    key: string;
    text: string;
};

export const $elementTypes = createSelector(
    base.$elementTypes,
    (elementTypes) => {
        return elementTypes.map((elementType) => {
            return {
                key: elementType,
                text: elementType,
            };
        });
    }
);
