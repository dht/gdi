import { createSelector } from 'reselect';
import { IGuidanceStore } from './types';

export const $i = (state: { guidance: IGuidanceStore }) => state.guidance;
const $n = (): null => null;
const $o = (): void => {};

export const $rawGuidanceState = createSelector($i, (state: IGuidanceStore) => state.appStateGuidance); // prettier-ignore
export const $rawRequiredDomains = createSelector($i, (state: IGuidanceStore) => state.requiredDomains); // prettier-ignore
export const $rawRequiredFeatures = createSelector($i, (state: IGuidanceStore) => state.requiredFeatures); // prettier-ignore
export const $rawRankedDomains = createSelector($i, (state: IGuidanceStore) => state.rankedDomains); // prettier-ignore
