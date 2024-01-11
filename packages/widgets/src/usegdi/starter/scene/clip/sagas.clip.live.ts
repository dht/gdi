import { selectors, actions } from '@gdi/store-iso';
import { put, select, takeEvery } from 'saga-ts';
import { createSocketsChannel } from '../../../../helpers/channels/channel.sockets';
import { diffToPatch, generateActions } from '../utils/utils.diff';

const nodeNames = ['sceneBits', 'sceneDots'];

export function* onLive(ev: any) {
  for (let nodeName of nodeNames) {
    const queue = generateActions(ev[nodeName] ?? {}, { nodeName });

    for (let action of queue) {
      yield put(action);
    }
  }
}

export function* root() {
  const appState = yield* select(selectors.raw.$rawAppState);
  const { socketsUrl } = appState;

  if (!socketsUrl) {
    return;
  }

  const channel = createSocketsChannel(socketsUrl, 'clip/live');
  yield takeEvery(channel, onLive);
}

export const saga = {
  id: 'widgets.clip.live',
  type: 'socket',
  root: root,
  trigger: {
    eventNames: ['clip/live'],
  },
};
