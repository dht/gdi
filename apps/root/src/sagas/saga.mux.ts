import { runFunction } from '@gdi/firebase';
import { actions, selectors } from '@gdi/store-base';
import { playSfx, stopAmbience, toast } from '@gdi/ui';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { guid4, invokeEvent, setBoolean } from 'shared-base';
import { customEvenChannel } from './channels/channel.customEvent';
import { firestoreFlowChannel } from './channels/channel.firebase';
import { parseResponse } from './saga.mux.response';
import { keysGuard } from './helpers/guards';

let streamChannel: any;

export function* clearState() {
  yield* put(actions.messages.setAll({}));
  yield* put(actions.currentIds.patch({ capabilityId: '' }));
  invokeEvent('mux/content', { content: '' });
  yield* put({ type: 'TABS', verb: 'clearAll' });
}

export function* clear() {
  yield fork(clearState);

  yield* call(runFunction, '/api/ai/assistant/clear', {
    prompt,
  });
}

export function* mux(ev: any) {
  const { data } = ev;
  const { prompt } = data;

  let shouldContinue = yield* call(keysGuard, true);
  if (!shouldContinue) {
    return;
  }

  if (prompt === 'clear') {
    yield* clear();
    return;
  }

  const message = {
    id: guid4(),
    content: prompt,
    role: 'user' as any,
    timestamp: Date.now(),
  };

  const messages = yield* select(selectors.base.$messages);

  yield put(actions.messages.add(message));

  streamChannel = firestoreFlowChannel();
  yield takeEvery(streamChannel, onStream);

  console.time('stream');
  const response = yield* call(runFunction, '/api/ai/assistant/stream', {
    prompt,
  });
  console.timeEnd('stream');

  invokeEvent('mux/content', { content: '' });

  yield call(parseResponse, response);

  streamChannel.close();
}

export function* onStream(ev: any) {
  const { data } = ev;

  const { content } = data ?? {};

  if (content === 'null') {
    data.content = '';
  }

  invokeEvent('mux/content', data);
}

export function* onPromptFocus(ev: any) {
  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const { boardId } = currentIds;

  if (boardId) return;

  yield put(actions.appState.patch({ showRoot: true }));
}

export function* onToggleFullscreen() {
  const appState = yield* select(selectors.raw.$rawAppState);
  const { isFullScreen } = appState;

  const nextValue = !isFullScreen;
  yield put(actions.appState.patch({ isFullScreen: nextValue }));
  setBoolean('fullscreen', nextValue);
}

export function* onStart() {
  const capability = yield* select(selectors.mux.$capability);

  if (!capability) return;

  const tabs = yield* select(selectors.mux.$capabilityTabs);

  yield put({ type: 'TABS', verb: 'loadCapability', payload: { tabs } });

  toast.show('Starting workflow', 'info');
}

export function* root() {
  let channel;

  yield delay(100);

  yield fork(clearState);

  channel = customEvenChannel('MUX/PROMPT');
  yield takeEvery(channel, mux);

  channel = customEvenChannel('MUX/CLEAR');
  yield takeEvery(channel, clear);

  channel = customEvenChannel('MUX/START');
  yield takeEvery(channel, onStart);

  channel = customEvenChannel('prompt/focus');
  yield takeEvery(channel, onPromptFocus);

  channel = customEvenChannel('fullscreen/toggle');
  yield takeEvery(channel, onToggleFullscreen);
}

export const saga = {
  id: 'root.mux',
  type: 'api',
  root: root,
};
