import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $moneyLines = createSelector(raw.$rawMoneyLines, (moneyLines) => {
    return Object.values(moneyLines);
});
