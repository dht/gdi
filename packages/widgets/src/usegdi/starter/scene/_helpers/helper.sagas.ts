import { actions as actionsIso } from '@gdi/store-iso';
import { all } from 'redux-saga/effects';
import { put, take } from 'saga-ts';

export function* takeAll(actionTypes: string[]) {
  const allTakes = actionTypes.map((actionType) => take(actionType));

  yield all(allTakes);
}

export function* getNodes(nodeNames: string[]) {
  const actionTypes: string[] = [];

  for (let node of nodeNames) {
    const action = (actionsIso as any)[node].get({});
    yield put(action);
    actionTypes.push(action.type.replace('GET', 'SET'));
  }

  yield takeAll(actionTypes);
}
