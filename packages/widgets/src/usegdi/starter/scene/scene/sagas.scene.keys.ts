import { actions as actionsIso, selectors as selectorsIso } from '@gdi/store-iso';
import { detachGizmo, getSelectedMesh } from 'isokit2';
import { put, select, takeEvery } from 'saga-ts';
import { createKeysChannels } from '../../../../helpers/channels/channel.key';

export function* onKeyDelete() {
  const mesh = getSelectedMesh();

  if (!mesh) {
    return;
  }

  const { id } = mesh;
  const sceneMeshes = yield* select(selectorsIso.raw.$rawSceneMeshes);
  const sceneExternals = yield* select(selectorsIso.raw.$rawSceneExternals);

  if (sceneMeshes[id]) {
    yield put(actionsIso.sceneMeshes.delete(id));
    detachGizmo();
  } else if (sceneExternals[id]) {
    yield put(actionsIso.sceneExternals.delete(id));
    detachGizmo();
  }
}
export function* root() {
  let channel;

  channel = createKeysChannels([{ key: 'delete' }]);
  yield takeEvery(channel, onKeyDelete);
}

export const saga = {
  id: 'widgets.scene.keys',
  type: 'keys',
  root: root,
  trigger: {
    keyNames: ['delete'],
  },
};
