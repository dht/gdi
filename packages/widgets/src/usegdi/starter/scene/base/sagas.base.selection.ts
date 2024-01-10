import { put, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { actions } from '@gdi/store-iso';

export function* onMeshSelection(ev: any) {
  const { data } = ev;
  const { elementId } = data;

  yield put(
    actions.sceneCurrentIds.patch({
      elementId,
    })
  );
}

export function* root() {
  const channel = customEvenChannel('mesh/select');
  yield takeEvery(channel, onMeshSelection);
}

export const saga = {
  id: 'widgets.3d.selection',
  type: 'customEvent',
  root: root,
  trigger: {
    actionTypes: ['mesh/select'],
  },
};
