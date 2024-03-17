import { ISaga, actions, selectors } from '@gdi/store-base';
import { fork, put, select } from 'saga-ts';
import { getJson, setJson } from 'shared-base';
import { takeEvery } from 'typed-redux-saga';
import { predicateAppState, predicateCurrentIds } from './predicates';

const LOCAL_STORAGE_KEY = 'filterParams';

export function* bootstrap() {
  const filters = getJson(LOCAL_STORAGE_KEY);

  if (!filters) return;

  const { focusTiers, focusProject, focusTags, projectId, globalTags, weekId } = filters;
  const appStateChange: any = {};
  const currentIdsChanges: any = {};

  if (projectId) {
    currentIdsChanges.projectId = projectId;
  }

  if (weekId) {
    currentIdsChanges.weekId = weekId;
  }

  if (focusProject) {
    appStateChange.focusProject = focusProject;
  }

  if (focusTags) {
    appStateChange.focusTags = focusTags;
  }

  if (focusTiers) {
    appStateChange.focusTiers = focusTiers;
  }

  if (globalTags) {
    appStateChange.tags = globalTags;
  }

  yield put(actions.appState.patch(appStateChange));
  yield put(actions.currentIds.patch(currentIdsChanges));
}

export function* onChange(action: any) {
  const filterParams = yield* select(selectors.base.$filterParams);
  setJson(LOCAL_STORAGE_KEY, filterParams);
}

export function* root() {
  yield fork(bootstrap);

  yield *takeEvery(predicateCurrentIds(['weekId', 'projectId']), onChange); // prettier-ignore
  yield *takeEvery(predicateAppState(['focusProject', 'focusTags', 'focusTiers']), onChange); // prettier-ignore
}

export const saga: ISaga = {
  id: 'gdi.filters',
  type: 'predicate',
  root: root,
  trigger: {},
};
