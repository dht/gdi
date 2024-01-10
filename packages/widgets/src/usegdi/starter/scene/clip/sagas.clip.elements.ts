import { actions, selectors } from '@gdi/store-iso';
import { prompt, toast } from '@gdi/ui';
import { detachGizmo, showMesh } from 'isokit2';
import { call, delay, fork, put, select, takeLatest } from 'saga-ts';
import { findElement } from '../_helpers/helper.elements';
import { bakeJson } from '../_helpers/helper.newAsset';

type Verb = 'toggleElement'; //;

type Action = {
  type: 'SCENE_ELEMENT';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  toggleElement: toggleElement,
};

export function* toggleElement(action: Action, element: Json) {
  const { id } = action;

  const bit = yield* select(selectors.base.$bit);

  if (!bit) {
    return;
  }

  const { elements = {} } = bit;

  const isVisible = !elements[id];
  elements[id] = isVisible;

  yield put(actions.sceneBits.patch(bit.id, { elements }));

  showMesh(id, isVisible);
}

export function* sceneElement(action: any) {
  const { verb, id } = action;
  yield delay(10);

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const element = yield* call(findElement, id);

  yield* fork(saga, action, element);
}

export function* root() {
  yield takeLatest('SCENE_ELEMENT', sceneElement);
}

export const saga = {
  id: 'widgets.clip.elements',
  type: 'entity',
  root: root,
  trigger: {
    eventNames: ['SCENE_ELEMENT'],
  },
};
