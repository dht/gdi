import { runFunction } from '@gdi/firebase';
import { actions } from '@gdi/store-base';
import { toast } from '@gdi/ui';
import { call, put, takeEvery } from 'saga-ts';
import { verifyProject } from '../_helpers/helper.projects';

export function* save(_action: any) {
  const projectId = yield* call(verifyProject);

  if (!projectId) {
    toast.show('Project name is required', 'error');
    return;
  }

  const response = yield* call(runFunction, '/api/saves/scene', {
    projectId,
  });

  const { asset } = response;

  if (!asset) {
    toast.show('Error saving scene', 'error');
    return;
  }

  yield put(actions.assets.set(asset.id, asset));
}

export function* root() {
  yield takeEvery('SCENE_SAVE', save);
}

export const saga = {
  id: 'widgets.scene.save',
  type: 'customAction',
  root: root,
  trigger: {
    actionTypes: ['SCENE_SAVE'],
  },
};
