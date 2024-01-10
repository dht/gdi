import { actions, selectors } from '@gdi/store-iso';
import { put, select, takeEvery } from 'saga-ts';
import { createKeysChannels } from '../../../../helpers/channels/channel.key';
import { globalShortKeys } from '../_data/data.globalKeys';

export function* onKey(ev: any) {
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { bitId, trackId } = currentIds;

  const nextTrackId = trackId === 'camera' ? 'object' : 'camera';

  switch (ev.key) {
    case 'a':
      yield put({ type: 'BIT', verb: 'previous', id: bitId });
      break;
    case 'd':
      yield put({ type: 'BIT', verb: 'next', id: bitId });
      break;
    case 'w':
    case 's':
      yield put(actions.sceneCurrentIds.patch({ trackId: nextTrackId }));
      break;
    case 'c':
      yield put({ type: 'TOOLBOX', verb: 'camera' });
      break;
  }
}

export function* root() {
  const channel = createKeysChannels(globalShortKeys);
  yield takeEvery(channel, onKey);
}

export const saga = {
  id: 'widgets.clip.keys',
  type: 'keys',
  root: root,
  trigger: {
    keyNames: ['a', 's', 'd', 'w', 'c'],
  },
};
