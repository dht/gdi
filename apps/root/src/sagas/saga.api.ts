import { runFunction } from '@gdi/firebase';
import { actions, auth, selectors } from '@gdi/store-base';
import { initSfx } from '@gdi/ui';
import { call, delay, fork, put, select } from 'saga-ts';
import { invokeEvent } from 'shared-base';

function* api() {
  try {
    const isGuest = yield* select(selectors.base.$isGuest);

    if (isGuest) {
      return;
    }

    const response = yield* call(
      runFunction,
      '/api/account/settings',
      {},
      'GET'
    );
    const { settings = {} } = response;

    yield put(actions.settings.patch(settings));

    const { allowSfx } = settings;

    initSfx(allowSfx);

    invokeEvent('settings/loaded');

    yield delay(100);
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.api.ts',
      method: 'api',
      err,
    });
  }
}

export function* root() {
  yield call(auth);
  yield* fork(api);
}

export const saga = {
  id: 'root.api',
  type: 'api',
  root: root,
};
