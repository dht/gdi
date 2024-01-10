import { delay, select, take } from 'saga-ts';
import { selectors } from '../selectors/selectors.index';

export function* auth() {
  const isAuthenticated = yield* select(selectors.base.$isAuthenticated);

  if (!isAuthenticated) {
    yield take('AUTHENTICATION_COMPLETED');
  }

  yield delay(10);
}
