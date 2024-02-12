import { ISaga } from '@gdi/store-base';
import { get } from 'lodash';
import { put, take, takeEvery, waitForAuth } from 'saga-ts';
import { predicateCurrentIds } from './predicates';
import { call } from 'saga-ts';

export function* onBoardChange(action: any) {
  const boardId = get(action, 'payload.boardId');

  if (!boardId) return;

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
