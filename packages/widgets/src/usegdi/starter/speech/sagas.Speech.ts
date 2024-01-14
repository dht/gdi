import { actions, selectors } from '@gdi/store-base';
import { fork, put, select } from 'saga-ts';
import { takeEvery } from 'saga-ts';
import { predicateCurrentIds } from '../../../helpers/predicates';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';

export function* onVoiceChange(action: any) {
  const { payload } = action;
  const { voiceId } = payload;

  const voices = yield* select(selectors.base.$voices);

  const voice = voices.find((v) => v.id === voiceId);

  if (!voice) {
    return;
  }

  const { provider: voiceProvider } = voice;

  const promptParams = {
    voiceId,
    voiceProvider,
  };

  yield put(actions.appState.patch({ promptParams }));
}

export function* bootstrap() {
  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const { voiceId } = currentIds;
  yield* fork(onVoiceChange, { payload: { voiceId } });
}

export function* root() {
  yield takeEvery(predicateCurrentIds('voiceId'), onVoiceChange);

  const channel = customEvenChannel('board/loaded');
  yield takeEvery(channel, bootstrap);
}

export const saga = {
  id: 'widgets.speech',
  type: 'component',
  root: root,
  trigger: {
    eventNames: ['board/loaded'],
  },
};
