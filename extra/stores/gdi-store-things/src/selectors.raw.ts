import { createSelector } from 'reselect';
import { IThingsStore } from './types';

export const $i = (state: { things: IThingsStore }) => state.things;
const $n = (): null => null;
const $o = (): void => {};

export const $rawThingsState = createSelector($i, (state: IThingsStore) => state.appStateThings); // prettier-ignore
export const $rawThings = createSelector($i, (state: IThingsStore) => state.things); // prettier-ignore
