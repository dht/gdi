import { createSelector } from 'reselect';
import { IGuidanceStore } from './types';

export const $i = (state: { guidance: IGuidanceStore }) => state.guidance;
const $n = (): null => null;
const $o = (): void => {};

export const $rawGuidanceState = createSelector($i, (state: IGuidanceStore) => state.appStateGuidance); // prettier-ignore
export const $rawBmsFeatures = createSelector($i, (state: IGuidanceStore) => state.bmsFeatures); // prettier-ignore
export const $rawBusinessDomains = createSelector($i, (state: IGuidanceStore) => state.businessDomains); // prettier-ignore
export const $rawRankings = createSelector($i, (state: IGuidanceStore) => state.rankings); // prettier-ignore
export const $rawRequirements = createSelector($i, (state: IGuidanceStore) => state.requirements); // prettier-ignore
