import { runFunction } from '@gdi/firebase';
import { actions, selectors } from '@gdi/store-base';
import { UsageOptions, isMobile, prompt, toast } from '@gdi/ui';
import { get } from 'lodash';
import { call, delay, fork, put, select, take, trackAuth } from 'saga-ts';
import { getJson, invokeEvent, patchJson } from 'shared-base';
import { takeEvery } from 'typed-redux-saga';
import p from '../../package.json';
import { boardsRoot } from '../main.root';
import { instanceLocal } from '../utils/axios';
import { l } from '../utils/logs';
import { arrayToObject } from '../utils/object';
import { bootstrapAdapters } from './helpers/saga.adapters';

const LOCALE_STORAGE_KEY = 'locale';

export function* os() {
  const isMac = navigator.userAgent.toLowerCase().indexOf('mac') >= 0;
  const cmdKey = isMac ? '⌘' : 'Ctrl';
  const { width, height } = window.screen;

  l({message: 'Configuration OS and screen dimensions', verb: 'bootstrap', data: { isMac, width, height }}); // prettier-ignore

  yield put(
    actions.appState.patch({
      isMac,
      cmdKey,
      screenWidth: width,
      screenHeight: height,
    })
  );
}

export function* version() {
  yield put(actions.appState.patch({ version: p.version }));

  yield take('BOARD_LOAD_DONE');
  yield delay(1000);

  l({ message: 'Broadcasting package.json info', verb: 'bootstrap', data: p });

  yield* call(invokeEvent, 'global/version', {
    version: p.version,
    dependencies: p.dependencies,
  });
}

export function* toggleTimeFormat(action: Action) {
  const appState = yield* select(selectors.raw.$rawAppState);

  let is24Hours = appState.is24Hours;

  const nextValue = !is24Hours;

  l({ message: 'Toggling time format', verb: 'configure', data: { is24Hours: nextValue } });

  yield* put(
    actions.appState.patch({
      is24Hours: nextValue,
    })
  );

  patchJson(LOCALE_STORAGE_KEY, {
    is24Hours: nextValue,
  });
}

export function* loadValuesFromStorage() {
  const locale = getJson(LOCALE_STORAGE_KEY);
  const { is24Hours = false } = locale ?? {};

  l({ message: 'Loading values from localeStorage', verb: 'bootstrap', data: { is24Hours } });

  yield* put(actions.appState.patch({ is24Hours }));
}

export function* fetchBoards() {
  const response: any = yield* call(instanceLocal.get, boardsRoot + '/allBoards.json');
  const obj = Array.isArray(response.data) ? arrayToObject(response.data) : response.data;
  yield put(actions.boards.setAll(obj));
}

export function* fetchCapabilities() {
  const response: any = yield* call(instanceLocal.get, boardsRoot + '/allCapabilities.json');
  yield put(actions.capabilities.setAll(response.data));
}

export function* fetchApiProviders() {
  const response: any = yield* call(instanceLocal.get, boardsRoot + '/allApiProviders.json');
  yield put(actions.apiProviders.setAll(response.data));
}

export function* fetchAssistants() {
  const response: any = yield* call(instanceLocal.get, boardsRoot + '/allAssistants.json');

  const obj = arrayToObject(response.data);
  yield put(actions.assistants.setAll(obj));
}

export function* fetchMyBoards() {
  yield put(actions.appState.patch({ isLoadingMyBoards: true }));
  const data = yield* call(runFunction, '/api/boards/myBoards', {}, 'GET');
  const obj: any = arrayToObject(data);
  yield put(actions.myBoards.setAll(obj));
  yield put(actions.appState.patch({ isLoadingMyBoards: false }));
}

export function* fetchMyAssets() {
  const data = yield* call(runFunction, '/api/assets/myAssets', {}, 'GET');
  const obj: any = arrayToObject(data?.assets ?? []);
  yield put(actions.assets.setAll(obj));
}

export function* fetchMyTags() {
  const data = yield* call(runFunction, '/api/tags/myTags', {}, 'GET');
  const obj: any = arrayToObject(data?.tags ?? []);
  yield put(actions.tags.setAll(obj));
}

export function* validateKeys() {
  const data = yield* call(runFunction, '/api/account/keys/validate');
  const { isApiKeyOk } = data ?? {};
  yield put(actions.appState.patch({ isApiKeyOk }));
}

export function* fetchData() {
  const user = yield* select(selectors.raw.$rawUser);

  if (user?.isAnonymous && !user?.emailVerified) {
    return;
  }

  yield* fork(fetchMyBoards);
  yield* fork(fetchMyTags);
  yield* fork(fetchMyAssets);
  yield* fork(validateKeys);
}

export function* root() {
  yield delay(0);

  l({ message: 'Starting GDI bootstrap', verb: 'clear' });
  yield* fork(trackAuth);
  yield* fork(bootstrapAdapters);
  yield* fork(fetchBoards);
  yield* fork(fetchCapabilities);
  yield* fork(fetchApiProviders);
  yield* fork(fetchAssistants);
  yield* fork(os);
  yield* fork(version);
  yield* fork(loadValuesFromStorage);

  yield* takeEvery('AUTHENTICATION_COMPLETED', fetchData);
}

export const saga = {
  id: 'gdi.gdi',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
