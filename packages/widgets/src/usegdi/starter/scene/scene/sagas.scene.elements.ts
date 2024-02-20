import { actions, selectors } from '@gdi/store-iso';
import { selectors as selectorsBase } from '@gdi/store-base';
import { prompt, toast } from '@gdi/ui';
import { detachGizmo, addElement } from 'isokit2';
import { call, delay, fork, put, select, takeLatest } from 'saga-ts';
import { findElement } from '../_helpers/helper.elements';
import { bakeJson } from '../_helpers/helper.newAsset';
import { getAction } from '../_helpers/helper.actions';

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

  const deleteAction = getAction(type, 'delete');

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
    const action = getAction(type, 'patch');

    if (action) {
      yield put(action(id, json));
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

export function* toggleElement(_action: Action) {
  const { id, payload } = _action;
  const { type, isVisible } = payload ?? {};

  const action = getAction(type, 'patch');

  if (!action) {
    return;
  }

  yield put(action(id, { enabled: !isVisible }));
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

  const patchAction = getAction(type, 'patch');

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

  const addAction = getAction(familyId, 'add');

  if (!addAction) {
    toast.show('Invalid familyId', 'error');
    return;
  }

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
