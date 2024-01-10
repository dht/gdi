import { runFunction } from '@gdi/firebase';
import { actions } from '@gdi/store-base';
import { toast } from '@gdi/ui';
import { call, put, takeEvery } from 'saga-ts';
import { verifyProject } from '../_helpers/helper.projects';
import { invokeEvent } from 'shared-base';

export const saga = {
  id: 'widgets.clip.save',
  type: 'customEvent',
  root: root,
  trigger: {
    actionTypes: ['clip/save'],
  },
};

export function* save(action: any) {
  try {
    const projectId = yield* call(verifyProject);

    if (!projectId) {
      toast.show('Project name is required', 'error');
      return;
    }

    const response = yield* call(runFunction, '/api/saves/clip', {
      projectId,
    });

    const { asset } = response;

    if (!asset) {
      toast.show('Error saving clip', 'error');
      return;
    }

    yield put(actions.assets.set(asset.id, asset));

    document.location.hash = `#default|${asset.id}`;
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.clip.save.ts',
      method: 'save',
      saga,
      err,
    });
  }
}

export function* root() {
  yield takeEvery('SCENE_SAVE', save);
}
