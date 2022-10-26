import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $currentCategory = createSelector(
    raw.$rawMoneyState,
    (appState) => {
        const { currentCategory } = appState;
        return currentCategory;
    }
);

export const $moneyLines = createSelector(
    $currentCategory,
    raw.$rawMoneyLines,
    (currentCategory, lines) => {
        return Object.values(lines).filter(
            (line) => line.category === currentCategory
        );
    }
);
