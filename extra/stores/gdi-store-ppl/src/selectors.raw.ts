import { createSelector } from 'reselect';
import { IPplStore } from './types';

export const $i = (state: { ppl: IPplStore }) => state.ppl;
const $n = (): null => null;
const $o = (): void => {};

export const $rawPplState = createSelector($i, (state: IPplStore) => state.appStatePpl); // prettier-ignore
export const $rawPersons = createSelector($i, (state: IPplStore) => state.persons); // prettier-ignore
