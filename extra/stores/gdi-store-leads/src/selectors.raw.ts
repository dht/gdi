import { createSelector } from 'reselect';
import { ILeadsStore } from './types';

export const $i = (state: { leads: ILeadsStore }) => state.leads;
const $n = (): null => null;
const $o = (): void => {};

export const $rawLeadsState = createSelector($i, (state: ILeadsStore) => state.appStateLeads); // prettier-ignore
export const $rawLeads = createSelector($i, (state: ILeadsStore) => state.leads); // prettier-ignore
