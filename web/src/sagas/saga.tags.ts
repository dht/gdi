import { IBoard, actions } from '@gdi/store-base';
import { prompt } from '@gdi/ui';
import { fork, put } from 'saga-ts';
import { getJson, invokeEvent, setJson } from 'shared-base';
import TagPickerContainer from '../containers/TagsModal.container';

const LOCALE_STORAGE_KEY = 'tags';

export function* showTagPicker(_action: any, _board: IBoard) {
  const { value, didCancel } = yield prompt.custom({
    title: 'Global Tags',
    component: TagPickerContainer,
    componentProps: {},
  });

  if (didCancel) {
    return;
  }

  yield put(actions.appState.patch({ tags: value }));

  setJson(LOCALE_STORAGE_KEY, value);
}

export function* bootstrapTags() {
  try {
    const tags = getJson(LOCALE_STORAGE_KEY);

    if (!tags) {
      return;
    }
    yield put(actions.appState.patch({ tags }));
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.tags.ts',
      method: 'bootstrapTags',
      saga,
      err,
    });
  }
}

export function* root() {
  yield* fork(bootstrapTags);
}

export const saga = {
  id: 'gdi.tags',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
