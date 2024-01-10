import { removeExternal, removeLight, removeMesh } from 'isokit2';
import { call, takeEvery } from 'saga-ts';

export function* deleteIsoMesh(action: any) {
  const { id } = action;
  yield call(removeMesh, id);
}

export function* deleteIsoLight(action: any) {
  const { id } = action;
  yield call(removeLight, id);
}

export function* deleteIsoExternal(action: any) {
  const { id } = action;
  yield call(removeExternal, id);
}

export function* root() {
  yield takeEvery('DELETE_SCENEMESH', deleteIsoMesh);
  yield takeEvery('DELETE_SCENELIGHT', deleteIsoLight);
  yield takeEvery('DELETE_SCENEEXTERNAL', deleteIsoExternal);
}

export const saga = {
  id: 'widgets.scene.onDelete',
  type: 'crud',
  root: root,
  trigger: {
    nodeNames: ['sceneLight', 'sceneMesh', 'sceneExternal'],
  },
};
