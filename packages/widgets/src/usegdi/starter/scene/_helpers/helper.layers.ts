import { IBit, actions } from '@gdi/store-iso';
import axios from 'axios';
import { call, fork, put } from 'saga-ts';

export function* loadLayer(bit: IBit) {
  const { attachmentUrl } = bit;

  const response = yield* call((axios as any).get, attachmentUrl);
}

export function* loadSkybox(bit: IBit) {}

const map: any = {
  layer: loadLayer,
  skybox: loadSkybox,
};

export function* loadSpecialBit(bit: IBit) {
  const { type, attachmentUrl } = bit;

  const saga = map[type];

  if (!saga) {
    return;
  }

  yield put(actions.sceneCurrentIds.patch({ layerId: type }));
  yield put(actions.sceneState.patch({ currentAttachmentUrl: attachmentUrl }));
  yield fork(saga, bit);
}
