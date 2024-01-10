import { showExternal, showLight, showMesh } from 'isokit2';
import { takeEvery } from 'saga-ts';
import { predicatePatchElement } from '../../../../helpers/predicates';

export function* onLightToggled(action: any) {
  const { id, payload } = action;
  const { enabled } = payload ?? {};
  showLight(id, enabled);
}

export function* onMeshToggled(action: any) {
  const { id, payload } = action;
  const { enabled } = payload ?? {};
  showMesh(id, enabled);
}

export function* onExternalToggled(action: any) {
  const { id, payload } = action;
  const { enabled } = payload ?? {};
  showExternal(id, enabled);
}

export function* root() {
  yield takeEvery(predicatePatchElement('sceneLight', 'enabled'), onLightToggled);
  yield takeEvery(predicatePatchElement('sceneMesh', 'enabled'), onMeshToggled);
  yield takeEvery(predicatePatchElement('sceneExternal', 'enabled'), onExternalToggled);
}

export const saga = {
  id: 'widgets.scene.onVisible',
  type: 'crud',
  root: root,
  trigger: {
    nodeNames: ['sceneLight', 'sceneMesh', 'sceneExternal'],
  },
};
