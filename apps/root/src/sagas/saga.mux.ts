import { runFunction } from '@gdi/firebase';
import { actions, auth, selectors } from '@gdi/store-base';
import { initSfx } from '@gdi/ui';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { guid4, invokeEvent } from 'shared-base';
import { customEvenChannel } from './channels/channel.customEvent';
import { firestoreFlowChannel } from './channels/channel.firebase';

let streamChannel: any;

function* mux(ev: any) {
  const { data } = ev;
  const { prompt } = data;

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
  });

  const { content } = response;

  invokeEvent('mux/content', { content: '' });

  yield put(
    actions.messages.add({
      id: guid4(),
      content,
      role: 'assistant',
      timestamp: Date.now(),
    })
  );

  streamChannel.close();
}

export function* onStream(ev: any) {
  const { data } = ev;
  invokeEvent('mux/content', data);
}

export function* root() {
  let channel;

  channel = customEvenChannel('MUX/PROMPT');
  yield takeEvery(channel, mux);
}

export const saga = {
  id: 'root.mux',
  type: 'api',
  root: root,
};
