import { actions } from '@gdi/store-iso';
import { checkMeshExists } from 'isokit2';
import { delay, put, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';

export function* onMeshMove(ev: any) {
  const { data } = ev;
  const { id, type, position, rotation, scaling } = data;

  // deleted?
  yield delay(50);
  const exists = checkMeshExists(id);

  if (!exists) {
    return;
  }

  switch (type) {
    case 'external':
      yield put(actions.sceneExternals.patch(id, { position, rotation, scaling }));
      break;
    case 'mesh':
      yield put(actions.sceneMeshes.patch(id, { position, rotation, scaling }));
      break;
    case 'light':
      break;
  }
}

export function* root() {
  const channel = customEvenChannel('element/move');
  yield takeEvery(channel, onMeshMove);
}

export const saga = {
  id: 'widgets.scene.onMove',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['element/move'],
  },
};
