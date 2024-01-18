import { actions, selectors } from '@gdi/store-iso';
import { selectors as selectorsBase } from '@gdi/store-base';
import { prompt, toast } from '@gdi/ui';
import { detachGizmo, addElement } from 'isokit2';
import { call, delay, fork, put, select, takeLatest } from 'saga-ts';
import { findElement } from '../_helpers/helper.elements';
import { bakeJson } from '../_helpers/helper.newAsset';

/*
  - create: create a new element
  - remove: remove an element
  - rename: rename an element
  - toggle: toggle an element visibility
*/

type Verb =
  | 'create' //
  | 'remove'
  | 'rename'
  | 'toggleModal'
  | 'toggleElement'
  | 'editStart'
  | 'editCancel'
  | 'editSave';

type Action = {
  type: 'SCENE_ELEMENT';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  create: create,
  remove: removeElement,
  rename: renameElement,
  toggleModal: toggleModal,
  toggleElement: toggleElement,
  editStart: editStart,
  editCancel: editCancel,
  editSave: editSave,
};

const mapAction: Record<string, any> = {
  externals: actions.sceneExternals.add,
  lights: actions.sceneLights.add,
  meshes: actions.sceneMeshes.add,
};

export function* removeElement(action: Action) {
  const { payload } = action;
  const { id, type } = payload ?? {};

  const { didCancel } = yield prompt.confirm({
    title: 'Delete Element',
    description: `Are you sure you want to delete this element?`,
    ctaButtonText: 'Delete Element',
  });

  if (didCancel) {
    return;
  }

  const map: any = {
    mesh: actions.sceneMeshes.delete,
    light: actions.sceneLights.delete,
    external: actions.sceneExternals.delete,
  };

  const deleteAction = map[type];

  if (!deleteAction) {
    toast.show('Invalid type', 'error');
    return;
  }

  yield put(actions.sceneCurrentIds.patch({ modalId: '', editId: '' }));
  yield put(deleteAction(id));
  detachGizmo();
}

export function* editStart(action: Action) {
  const { id } = action;
  yield put(actions.sceneCurrentIds.patch({ modalId: 'editElement', editId: id }));
}

export function* editCancel(action: Action) {
  yield put(actions.sceneCurrentIds.patch({ editId: '' }));
}

export function* editSave(action: Action) {
  const { payload } = action;
  const { type, code, item } = payload;

  const { id } = item;

  try {
    const json = JSON.parse(code);

    switch (type) {
      case 'mesh':
        yield put(actions.sceneMeshes.patch(id, json));
        break;
      case 'light':
        yield put(actions.sceneLights.patch(id, json));
        break;
      case 'external':
        yield put(actions.sceneExternals.patch(id, json));
        break;
    }

    addElement({ ...item, ...json }, type, true);

    yield put(
      actions.sceneCurrentIds.patch({
        editId: '',
        modalId: '',
      })
    );
  } catch (err) {
    toast.show('Invalid JSON', 'error');
    return;
  }
}

export function* toggleElement(action: Action) {
  const { id, payload } = action;
  const { type, isVisible } = payload ?? {};

  switch (type) {
    case 'mesh':
      yield put(actions.sceneMeshes.patch(id, { enabled: !isVisible }));
      break;
    case 'light':
      yield put(actions.sceneLights.patch(id, { enabled: !isVisible }));
      break;
    case 'external':
      yield put(actions.sceneExternals.patch(id, { enabled: !isVisible }));
      break;
  }
}

export function* toggleModal(action: Action) {
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { modalId } = currentIds;
  const nextId = modalId === 'elements' ? '' : 'elements';
  yield put(actions.sceneCurrentIds.patch({ editId: '', modalId: nextId }));
}

export function* renameElement(action: Action) {
  const { id } = action;

  const element = yield* call(findElement, id);

  if (!element) {
    return;
  }

  const { label, type } = element;

  const { value, didCancel } = yield prompt.input({
    title: 'Rename Element',
    defaultValue: label ?? id,
    placeholder: 'Enter a name',
    ctaButtonText: 'Rename',
  });

  if (didCancel || !value) {
    return;
  }

  const map: any = {
    mesh: actions.sceneMeshes.patch,
    light: actions.sceneLights.patch,
    external: actions.sceneExternals.patch,
  };

  const patchAction = map[type];

  if (!patchAction) {
    toast.show('Invalid type', 'error');
    return;
  }

  yield put(patchAction(id, { label: value }));
}

export function* create(action: Action) {
  const { payload } = action;
  const { codeRaw, familyId, elementTypeId } = payload;

  const projectTag = yield* select(selectorsBase.base.$projectTag);

  if (!projectTag) {
    toast.show(
      'Please add a project tag in the bottom bar, click the part with the tag emoji',
      'error'
    );
    return;
  }

  const result = yield* call(bakeJson, codeRaw);
  const { isSuccess, json } = result;

  if (!isSuccess) {
    toast.show('Invalid JSON', 'error');
    return;
  }

  const addAction = mapAction[familyId];

  if (!addAction) {
    toast.show('Invalid familyId', 'error');
    return;
  }

  json.projectTag = projectTag;

  yield put(addAction(json));

  // close modal
  yield put(actions.sceneCurrentIds.patch({ modalId: '' }));

  toast.show('Element created', 'success');
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
  id: 'widgets.scene.elements',
  type: 'entity',
  root: root,
  trigger: {
    eventNames: ['SCENE_ELEMENT'],
  },
};
