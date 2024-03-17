import { selectors, ILists, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseListsChange } from './Lists.utils';
import { guid4 } from 'shared-base';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'LIST_ITEM';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addListItem,
  edit: editListItem,
  delete: deleteListItem,
};

export function* addListItem(action: Action, item: ILists) {
  const { payload } = action;
  const { data } = payload;

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.listItems.add({
      id: guid4(),
      ...data,
    })
  );
}

export function* editListItem(action: Action, item: ILists) {
  const { id, payload } = action;

  const change = parseListsChange(payload);

  yield put(actions.listItems.patch(id, change));
}

export function* deleteListItem(action: Action, item: ILists) {
  const { id, payload } = action;

  yield put(actions.listItems.delete(id));
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
  yield takeEvery('LIST_ITEM', list);
}

export const saga = {
  id: 'widgets.listItem',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['LIST_ITEM'],
  },
};
