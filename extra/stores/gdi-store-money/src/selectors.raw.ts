import { createSelector } from 'reselect';
import { IMoneyStore } from './types';

export const $i = (state: { money: IMoneyStore }) => state.money;
const $n = (): null => null;
const $o = (): void => {};

export const $rawMoneyState = createSelector($i, (state: IMoneyStore) => state.appStateMoney); // prettier-ignore
export const $rawMoneyLines = createSelector($i, (state: IMoneyStore) => state.moneyLines); // prettier-ignore
export const $rawMoneyBehaviors = createSelector($i, (state: IMoneyStore) => state.moneyBehaviors); // prettier-ignore
