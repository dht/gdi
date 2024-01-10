import { actions, selectors } from '@gdi/store-base';
import { ShortKeys, prompt } from '@gdi/ui';
import { fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { globalShortKeys } from '../config/config.shortKeys';
import { createKeysChannels } from './channels/channel.key';
import { l } from '../utils/logs';

const isMac = navigator.userAgent.toLowerCase().indexOf('mac') >= 0;

const map: Record<string, any> = {
  toggleCommandPalette,
  focusOnPrompt,
  showShortKeys,
  toggleLog,
};

export function* toggleCommandPalette(_action: any) {
  invokeEvent('bar/commandPalette');
}

export function* focusOnPrompt() {
  invokeEvent('prompt/focus');
}

export function* showShortKeys() {
  prompt.custom({
    title: 'Short Keys',
    component: ShortKeys,
    componentProps: {
      shortKeys: globalShortKeys,
      isMac,
    },
  });
}

export function* toggleLog() {
  const appState = yield* select(selectors.raw.$rawAppState);

  yield put(
    actions.appState.patch({
      showLog: !appState.showLog,
    })
  );
}

export function* shortKey(action: any) {
  const { id } = action;

  const saga = map[id];

  l({ message: `Short key "${id}" invoked`, source: 'shortKey', data: { action } });

  if (!saga) {
    return;
  }

  yield* fork(saga, action);
}

export function* root() {
  const channel = createKeysChannels(globalShortKeys);
  yield takeEvery(channel, shortKey);
}

export const saga = {
  id: 'gdi.keys',
  type: 'keys',
  root: root,
  trigger: {},
};
