import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $libraryPages = createSelector(
    base.$libraryPages,
    (libraryPages) => {
        return Object.values(libraryPages);
    }
);
