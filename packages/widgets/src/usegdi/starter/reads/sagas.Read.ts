import { selectors, IReads, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseReadsChange } from './Reads.utils';
import { guid4 } from 'shared-base';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'READ';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addRead,
  edit: editRead,
  delete: deleteRead,
};

export function* addRead(action: Action, item: IReads) {
  const { payload } = action;
  const { data } = payload;

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.reads.add({
      id: guid4(),
      ...data,
    })
  );
}

export function* editRead(action: Action, item: IReads) {
  const { id, payload } = action;

  const change = parseReadsChange(payload);

  yield put(actions.reads.patch(id, change));
}

export function* deleteRead(action: Action, item: IReads) {
  const { id, payload } = action;

  yield put(actions.reads.delete(id));
}

export function* read(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const reads = yield* select(selectors.raw.$rawReads);
  const item = reads[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('READ', read);
}

export const saga = {
  id: 'widgets.read',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['READ'],
  },
};
