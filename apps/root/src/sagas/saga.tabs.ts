import { actions, selectors } from '@gdi/store-base';
import { Json } from 'redux-store-generator';
import { delay, fork, put, select, takeLatest } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { customEvenChannel } from './channels/channel.customEvent';

export const saga = {
  id: 'gdi.tabs',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['TABS'],
  },
};

type Verb =
  | 'clearAll' //
  | 'loadCapability'
  | 'add'
  | 'remove';

type Action = {
  type: 'TABS';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  clearAll: clearAll,
  loadCapability: loadCapability,
  add: addTab,
  remove: removeTab,
};

export function* clearAll(action: Action) {
  try {
    yield put(
      actions.muxTabs.setAll({
        home: {
          id: 'home',
          name: 'Home',
          description: '',
        },
      })
    );
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.tabs.ts',
      method: 'clearAll',
      saga,
      err,
    });
  }
}

export function* loadCapability(action: Action) {
  const { payload } = action;
  const { tabs } = payload;
  try {
    yield put(
      actions.muxTabs.setAll({
        home: {
          id: 'home',
          name: 'Home',
        },
        ...tabs,
      })
    );

    yield delay(100);

    invokeEvent('tabs/setActive', { id: Object.keys(tabs)[0] });
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.tabs.ts',
      method: 'loadCapability',
      saga,
      err,
    });
  }
}

export function* addTab(action: Action) {
  const { payload } = action;
  const { item } = payload;
  const { id, name, boardId } = item;

  try {
    yield put(
      actions.muxTabs.set(id, {
        id,
        name,
        boardId,
      })
    );

    yield delay(100);

    invokeEvent('tabs/setActive', { id });
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.tabs.ts',
      method: 'addTab',
      saga,
      err,
    });
  }
}

export function* removeTab(ev: any) {
  const { data } = ev;
  const { tabId } = data;

  try {
    const previousTab = yield* select(selectors.mux.$previousTab);

    const { id } = previousTab;

    yield delay(100);
    yield put(actions.muxTabs.delete(tabId));
    invokeEvent('tabs/setActive', { id });
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.tabs.ts',
      method: 'removeTab',
      saga,
      err,
    });
  }
}

export function* tabs(action: any) {
  const { verb } = action;
  yield delay(10);

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  yield* fork(saga, action);
}

export function* root() {
  let channel;

  yield takeLatest('TABS', tabs);

  channel = customEvenChannel('tab/close');
  yield takeLatest(channel, removeTab);
}
