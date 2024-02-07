import { addCharacter, addExternal, addLight, addMesh } from 'isokit2';
import { call, takeEvery } from 'saga-ts';
import { predicateNewElement } from '../../../../helpers/predicates';

export function* onLightAdded(action: any) {
  const { payload } = action;
  yield call(addLight, payload);
}

export function* onMeshAdded(action: any) {
  const { payload } = action;

  yield call(addMesh, payload);
}

export function* onExternalAdded(action: any) {
  const { payload } = action;
  yield call(addExternal, payload);
}

export function* onCharacterAdded(action: any) {
  const { payload } = action;
  yield call(addCharacter, payload);
}

export function* root() {
  yield takeEvery(predicateNewElement('sceneLight'), onLightAdded);
  yield takeEvery(predicateNewElement('sceneMesh'), onMeshAdded);
  yield takeEvery(predicateNewElement('sceneExternal'), onExternalAdded);
  yield takeEvery(predicateNewElement('sceneCharacter'), onCharacterAdded);
}

export const saga = {
  id: 'widgets.scene.onAdd',
  type: 'crud',
  root: root,
  trigger: {
    nodeNames: ['sceneLight', 'sceneMesh', 'sceneExternal'],
  },
};
