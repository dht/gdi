import { selectors, ILists } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'LIST_ITEMS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* lists(action: any) {
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
  yield takeEvery('LIST_ITEMS', lists);
}

export const saga = {
  id: 'widgets.listItems',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['LIST_ITEMS'],
  },
};
