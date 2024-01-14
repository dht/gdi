import { actions, selectors } from '@gdi/store-base';
import { put, select } from 'saga-ts';
import { takeEvery } from 'saga-ts';
import { findCurrentLineIndex } from '../transcript/Transcript.utils';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';

export function* bootstrap(action: any) {
  const { transcriptLines } = action;

  // yield put(actions.transcriptLines.pushMany(transcriptLines));
}

export function* youtubeTime(action: any) {
  const { data } = action;
  const { time } = data;

  const lines = yield* select(selectors.raw.$rawTranscriptLines);

  const lineIndex = findCurrentLineIndex(Object.values(lines), time * 1000);
  const line = lines[lineIndex];

  const { duration } = line ?? {};

  yield put(
    actions.appState.patch({
      lineIndex,
      lineDuration: duration,
    })
  );
}

export function* root() {
  yield takeEvery('BOOTSTRAP_TRANSCRIPT', bootstrap);

  const channel = customEvenChannel('youtube/time');
  yield takeEvery(channel, youtubeTime);
}

export const saga = {
  id: 'widgets.transcript',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['BOOTSTRAP_TRANSCRIPT'],
    eventNames: ['youtube/time'],
  },
};
