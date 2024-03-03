import { selectors } from '@gdi/store-base';
import { put, select } from 'saga-ts';

export function* checkGuest() {
  const isGuest = yield* select(selectors.base.$isGuest);

  if (isGuest) {
    yield put({
      type: 'NAVIGATE',
      to: '/login',
    });
  }

  return isGuest;
}
