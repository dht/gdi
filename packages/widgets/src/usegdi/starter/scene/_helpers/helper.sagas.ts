import { actions as actionsIso, selectors } from '@gdi/store-iso';
import { all, select, put, take } from 'saga-ts';
import { merge } from 'lodash';

export function* takeAll(actionTypes: string[]) {
  const allTakes = actionTypes.map((actionType) => take(actionType));

  yield all(allTakes);
}

export function* getNodes(nodeNames: string[]) {
  const actionTypes: string[] = [];

  for (let nodeName of nodeNames) {
    const action = (actionsIso as any)[nodeName].get({ withMerge: false });

    yield put(action);
    actionTypes.push(action.type.replace('GET', 'SET'));
  }

  yield takeAll(actionTypes);
}
