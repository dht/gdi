import { createSelector } from 'reselect';
import { $rawSceneCurrentIds } from './selectors.raw';

export const $i = (state: any) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawAppState = createSelector($i, (state: any) =>state.appState); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: any) =>state.currentIds); // prettier-ignore

export const $projectTag = createSelector($rawCurrentIds, (currentIds) => {
  const { projectId } = currentIds;
  return projectId;
});
