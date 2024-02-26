import { runFunction } from '@gdi/firebase';
import { actions, auth, selectors } from '@gdi/store-base';
import { initSfx } from '@gdi/ui';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { guid4, invokeEvent } from 'shared-base';
import { customEvenChannel } from './channels/channel.customEvent';
import { firestoreFlowChannel } from './channels/channel.firebase';
import { speak } from '../utils/speech.sockets';
import { tools } from '../data/data.tools';
import { parseResponse } from './saga.mux.response';

let streamChannel: any;

export function* clear() {
  yield* put(actions.messages.setAll({}));
}

export function* mux(ev: any) {
  const { data } = ev;
  const { prompt } = data;

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

  const response = yield* call(runFunction, '/api/ai/chat/stream', {
    messages: [...messages, message],
    tools,
  });

  invokeEvent('mux/content', { content: '' });

  yield call(parseResponse, response);

  streamChannel.close();
}

export function* onStream(ev: any) {
  const { data } = ev;
  invokeEvent('mux/content', data);
}

export function* onPromptFocus(ev: any) {
  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const { boardId } = currentIds;

  if (boardId) return;

  yield put(actions.appState.patch({ showRoot: true }));
}

export function* root() {
  let channel;

  channel = customEvenChannel('MUX/PROMPT');
  yield takeEvery(channel, mux);

  channel = customEvenChannel('prompt/focus');
  yield takeEvery(channel, onPromptFocus);
}

export const saga = {
  id: 'root.mux',
  type: 'api',
  root: root,
};
