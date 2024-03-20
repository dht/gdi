import { selectors, IList, actions } from '@gdi/store-base';
import { upperFirst } from 'lodash';
import { fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent } from 'shared-base';

const ITEMS_BOARD_ID = 'B-053';

type Verb = 'drillDown';

type Action = {
  type: 'LISTS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  drillDown,
};

export function* drillDown(_action: any, item: IList) {
  const { id, title = 'Items' } = item;

  const tabName = upperFirst(title) + ' (list)';

  if (!id) return;

  const tabs = yield* select(selectors.raw.$rawMuxTabs);
  const existingItemsTab = Object.values(tabs).find((t: any) => t.boardId === ITEMS_BOARD_ID);

  if (existingItemsTab) {
    yield put(actions.muxTabs.delete(existingItemsTab.id));
  }

  yield put(actions.currentIds.patch({ listId: id }));

  yield put(
    actions.muxTabs.set(id, {
      id,
      name: tabName,
      boardId: ITEMS_BOARD_ID,
    })
  );

  invokeEvent('tabs/setActive', { id });
}

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
  yield takeEvery('LISTS', lists);
}

export const saga = {
  id: 'widgets.lists',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['LISTS'],
  },
};
