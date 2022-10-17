import { createSelector } from 'reselect';
import { IDashboardStore } from './types';

export const $i = (state: { dashboard: IDashboardStore }) => state.dashboard;
const $n = (): null => null;
const $o = (): void => {};

export const $rawDashboard = createSelector($i, (state: IDashboardStore) => state.dashboard); // prettier-ignore
export const $rawStats = createSelector($i, (state: IDashboardStore) => state.stats); // prettier-ignore
export const $rawStatsJourneys = createSelector($i, (state: IDashboardStore) => state.statsJourneys); // prettier-ignore
