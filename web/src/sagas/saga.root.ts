import { ISaga, actions, selectors } from '@gdi/store-base';
import { put, select, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

export function* toggleRoot(action: any) {
  const appState = yield* select(selectors.raw.$rawAppState);
  const { showRoot } = appState;
  yield put(actions.appState.patch({ showRoot: !showRoot }));
}

export function* bootstrapRoot() {
  const appState = yield* select(selectors.raw.$rawAppState);
  const settings = yield* select(selectors.raw.$rawSettings);
  const { defaultRoot, startWithRoot } = settings;

  yield put(
    actions.appState.patch({
      root: defaultRoot,
      showRoot: startWithRoot,
    })
  );
}

export function* root() {
  let channel;

  channel = customEvenChannel('root/toggle');
  yield takeEvery(channel, toggleRoot);

  channel = customEvenChannel('settings/loaded');
  yield takeEvery(channel, bootstrapRoot);
}

export const saga: ISaga = {
  id: 'gdi.root',
  type: 'customEvent',
  root: root,
  trigger: {},
};
