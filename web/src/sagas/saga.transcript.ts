import { actions, selectors } from '@gdi/store-base';
import { put, select, takeEvery } from 'saga-ts';
import { getMaxId } from '../utils/transcript';

export function* transcriptAddPrompt(action: any) {
  const { prompt } = action;

  const transcriptLines = yield* select(selectors.raw.$rawTranscriptLines);

  let nextId: number = getMaxId(transcriptLines) + 1;

  yield put(
    actions.transcriptLines.set(String(nextId), {
      id: String(nextId),
      speakerName: 'user',
      text: prompt,
    })
  );
}

export function* root() {
  yield takeEvery('TRANSCRIPT_PROMPT', transcriptAddPrompt);
}

export const saga = {
  id: 'gdi.transcript',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['TRANSCRIPT_PROMPT'],
  },
};
