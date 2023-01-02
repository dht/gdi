import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';

export const $all = (state: any) => state;

export const $serviceStatus = createSelector(
    raw.$rawGoogleSyncState,
    (appState) => appState.serviceStatus
);
