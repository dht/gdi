import { createSelector } from 'reselect';
import { IFreelancerStore } from './types';

export const $i = (state: { freelancer: IFreelancerStore }) => state.freelancer;
const $n = (): null => null;
const $o = (): void => {};

export const $rawFreelancerState = createSelector($i, (state: IFreelancerStore) => state.appStateFreelancer); // prettier-ignore
export const $rawUpgrades = createSelector($i, (state: IFreelancerStore) => state.upgrades); // prettier-ignore
export const $rawUpgradesCategories = createSelector($i, (state: IFreelancerStore) => state.upgradeCategories); // prettier-ignore
