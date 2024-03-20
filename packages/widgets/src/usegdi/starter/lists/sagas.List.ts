import { selectors, ILists, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseChange } from './Lists.utils';
import { guid4 } from 'shared-base';
import { toast } from '@gdi/ui';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'LIST_';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addList,
  edit: editList,
  delete: deleteList,
};

export function* addList(action: Action, item: ILists) {
  const { payload } = action;
  const { data } = payload;

  const metaParams = yield* select(selectors.base.$metaParams);

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.lists.add({
      id: guid4(),
      ...data,
      ...metaParams,
    })
  );

  toast.show('List added');
}

export function* editList(action: Action, item: ILists) {
  const { id, payload } = action;

  const change = parseChange(payload);

  yield put(actions.lists.patch(id, change));
}

export function* deleteList(action: Action, item: ILists) {
  const { id, payload } = action;

  yield put(actions.lists.delete(id));
}

export function* list(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const lists = yield* select(selectors.raw.$rawLists);
  const item = lists[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('LIST', list);
}

export const saga = {
  id: 'widgets.list',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['LIST'],
  },
};
