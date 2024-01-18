import { createSelector } from 'reselect';

export const $i = (state: any) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawAppState = createSelector($i, (state: any) =>state.appState); // prettier-ignore

export const $projectTag = createSelector($rawAppState, (appState) => {
  const { tags = [] } = appState;
  const projectTag = tags.find((tag: string) => tag.startsWith('project-'));

  return projectTag;
});

export const $dbTag = createSelector($rawAppState, (appState) => {
  const { boardDbTag } = appState;
  return boardDbTag ? `project-${boardDbTag}` : '';
});

export const $tagForFilteringElements = createSelector($projectTag, $dbTag, (projectTag, dbTag) => {
  return dbTag || projectTag;
});
