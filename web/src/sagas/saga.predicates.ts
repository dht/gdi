import { ISaga, actions } from '@gdi/store-base';
import { get } from 'lodash';
import { put, take, takeEvery, waitForAuth } from 'saga-ts';
import { predicateCurrentIds } from './predicates';
import { call } from 'saga-ts';
import { isMobile } from '@gdi/ui';

export function* onBoardChange(action: any) {
  const { payload } = action;
  const { boardId, itemId } = payload ?? {};

  const flavour = itemId ? 'item' : 'default';

  yield put(actions.currentIds.patch({ itemId }));
  yield put(actions.appState.patch({ flavour }));

  if (!boardId) return;

  if (isMobile()) {
    window.scrollTo(0, 0);
  }

  yield call(waitForAuth);

  yield put({
    type: 'BOARD',
    verb: 'bootstrapBoard',
    id: boardId,
  });
}

export function* root() {
  yield takeEvery(predicateCurrentIds('boardId'), onBoardChange);
}

export const saga: ISaga = {
  id: 'gdi.predicates',
  type: 'predicate',
  root: root,
  trigger: {},
};
