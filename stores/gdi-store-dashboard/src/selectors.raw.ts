import { createSelector } from 'reselect';
import { IDashboardStore } from './types';

export const $i = (state: { dashboard: IDashboardStore }) => state.dashboard;
const $n = (): null => null;
const $o = (): void => {};

export const $rawAppStateDashboard = createSelector($i, (state: IDashboardStore) => state.appStateDashboard); // prettier-ignore
export const $rawCurrentIdsDashboard = createSelector($i, (state: IDashboardStore) => state.currentIdsDashboard); // prettier-ignore
export const $rawStats = createSelector($i, (state: IDashboardStore) => state.stats); // prettier-ignore
export const $rawStatsJourneys = createSelector($i, (state: IDashboardStore) => state.statsJourneys); // prettier-ignore
export const $rawInboxMessages = createSelector($i, (state: IDashboardStore) => state.inboxMessages); // prettier-ignore
