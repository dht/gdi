import { selectors, IListItems, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseChange } from './ListItems.utils';
import { guid4 } from 'shared-base';
import { toast } from '@gdi/ui';

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

export function* addListItem(action: Action, item: IListItems) {
  const { payload } = action;
  const { data } = payload;

  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const { listId } = currentIds;

  const metaParams = yield* select(selectors.base.$metaParams);

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  if (!listId) {
    toast.show('List not selected', 'error');
    return;
  }

  yield* put(
    actions.listItems.add({
      id: guid4(),
      ...data,
      ...metaParams,
      listId,
    })
  );

  toast.show('ListItem added');
}

export function* editListItem(action: Action, item: IListItems) {
  const { id, payload } = action;

  const change = parseChange(payload);

  yield put(actions.listItems.patch(id, change));
}

export function* deleteListItem(action: Action, item: IListItems) {
  const { id, payload } = action;

  yield put(actions.listItems.delete(id));
}

export function* listItem(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const listItems = yield* select(selectors.raw.$rawListItems);
  const item = listItems[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('LIST_ITEM', listItem);
}

export const saga = {
  id: 'widgets.listItem',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['LIST_ITEM'],
  },
};
