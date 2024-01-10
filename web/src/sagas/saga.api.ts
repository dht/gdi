import { delay, fork, put, take } from 'saga-ts';
import { invokeEvent } from 'shared-base';

export const saga = {
  id: 'gdi.api',
  type: 'api',
  root: root,
  trigger: {},
};

export function* api() {
  try {
    yield delay(100);

    yield put({
      type: 'GET_TODOS',
    });
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.api.ts',
      method: 'api',
      saga,
      err,
    });
  }
}

export function* root() {
  yield take('AUTHENTICATION_COMPLETED');

  yield* fork(api);
}
