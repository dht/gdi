import { selectors, IListItems } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'LIST_ITEMS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* listItems(action: any) {
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
  yield takeEvery('LIST_ITEMS', listItems);
}

export const saga = {
  id: 'widgets.listItems',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['LIST_ITEMS'],
  },
};
