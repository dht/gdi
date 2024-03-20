import { ISaga, actions, selectors } from '@gdi/store-base';
import { delay, fork, put, select } from 'saga-ts';
import { getJson, invokeEvent, setJson } from 'shared-base';
import { takeEvery } from 'typed-redux-saga';
import { predicateAppState, predicateCurrentIds } from './predicates';
import { isEmpty } from 'lodash';

const FILTER_STORAGE_KEY = 'filterParams';
const TABS_STORAGE_KEY = 'muxTabs';
const TAGS_STORAGE_KEY = 'tags';

export function* bootstrapFilters() {
  const filters = getJson(FILTER_STORAGE_KEY);

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
  setJson(FILTER_STORAGE_KEY, filterParams);
}

export function* bootstrapTabs() {
  const tabs = getJson(TABS_STORAGE_KEY);

  if (!tabs) return;

  yield put(actions.muxTabs.setAll(tabs));
}

export function* onMuxTabs(_action: any) {
  const tabs = yield* select(selectors.raw.$rawMuxTabs);
  setJson(TABS_STORAGE_KEY, tabs);

  if (isEmpty(tabs)) {
    invokeEvent('MUX/CLEAR');
  }
}

export function* onTags(action: any) {
  const { payload } = action;
  const { tags } = payload;

  setJson(TAGS_STORAGE_KEY, tags);
}

export function* bootstrapTags() {
  const tags = getJson(TAGS_STORAGE_KEY);

  if (!tags) return;

  yield put(actions.appState.patch({ tags }));
}

export function* root() {
  yield delay(100);
  yield* fork(bootstrapFilters);
  yield* fork(bootstrapTabs);
  yield* fork(bootstrapTags);

  yield *takeEvery(predicateCurrentIds(['weekId', 'projectId']), onChange); // prettier-ignore
  yield *takeEvery(predicateAppState(['focusProject', 'focusTags', 'focusTiers']), onChange); // prettier-ignore
  yield *takeEvery(predicateAppState(['tags']), onTags); // prettier-ignore

  yield* takeEvery(['SET_MUXTABS', 'SET_MUXTAB', 'DELETE_MUXTAB'], onMuxTabs);
}

export const saga: ISaga = {
  id: 'gdi.persist',
  type: 'predicate',
  root: root,
  trigger: {},
};
