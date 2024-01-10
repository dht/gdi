import { actions, selectors } from '@gdi/store-iso';
import { detachGizmo, setGizmoMode, switchCamera, toggleLights } from 'isokit2';
import { delay, fork, put, select, takeEvery } from 'saga-ts';
import { toggleModal } from '../_helpers/helper.ui';
import { getBoolean, invokeEvent } from 'shared-base';
import { ga } from '@gdi/firebase';

type Verb =
  | 'select' //
  | 'move'
  | 'rotate'
  | 'scale'
  | 'camera'
  | 'elements'
  | 'elementRename'
  | 'bits'
  | 'add'
  | 'lights'
  | 'toggleGrid'
  | 'save';

type Action = {
  type: 'TOOLBOX';
  verb: Verb;
  id: string;
  payload: Json;
};

const map = {
  select: newTool,
  move: newTool,
  rotate: newTool,
  scale: newTool,
  camera: camera,
  bits: command,
  elements: command,
  elementRename: command,
  add: command,
  lights: command,
  toggleGrid: command,
  save: save,
};

export function* newTool(action: Action) {
  let freeMove: boolean = false;

  switch (action.verb) {
    case 'select':
      detachGizmo();
      setGizmoMode('');
      freeMove = true;
      break;
    case 'move':
      setGizmoMode('move');
      yield put(actions.sceneState.patch({ freeMove: false }));
      freeMove = false;
      break;
    case 'rotate':
      setGizmoMode('rotate');
      freeMove = false;
      break;
    case 'scale':
      setGizmoMode('scale');
      freeMove = false;
      break;
  }

  yield put(actions.sceneState.patch({ freeMove }));
}

export function* command(action: Action) {
  const currentElement = yield* select(selectors.base.$element);

  switch (action.verb) {
    case 'bits':
      yield* toggleModal('bits');
      break;
    case 'elements':
      yield* toggleModal('elements');
      break;
    case 'elementRename':
      yield put({ type: 'SCENE_ELEMENT', verb: 'rename', id: currentElement?.id });
      break;
    case 'add':
      yield* toggleModal('newElement');
      break;
    case 'lights':
      toggleLights();
      break;
    case 'toggleGrid':
      yield* toggleGrid();
      break;
  }
}

export function* toggleGrid() {
  const sceneState = yield* select(selectors.raw.$rawSceneState);
  const hideGrid = sceneState.hideGrid;
  yield put(actions.sceneState.patch({ hideGrid: !hideGrid }));
}

export function* camera(_action: Action) {
  const cameraId = switchCamera();
  yield put(actions.sceneCurrentIds.patch({ cameraId }));
  invokeEvent('camera/change', { cameraId });
}

export function* save(_action: Action) {
  yield put({ type: 'SCENE_SAVE' });
}

export function* toolbox(action: any) {
  const { verb } = action;
  yield delay(10);

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  ga(`scene.toolbox.${verb}`, {});

  yield* fork(saga, action);
}

export function* root() {
  yield takeEvery('TOOLBOX', toolbox);
}

export const saga = {
  id: 'widgets.3d.toolbox',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['TOOLBOX'],
  },
};
