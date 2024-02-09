import { IBoard, actions, selectors } from '@gdi/store-base';
import { prompt, toast } from '@gdi/ui';
import { delay, fork, put, select } from 'saga-ts';
import { getJson, invokeEvent, setJson } from 'shared-base';
import TagPickerContainer from '../containers/TagsModal.container';
import { customEvenChannel } from './channels/channel.customEvent';
import { takeEvery } from 'typed-redux-saga';

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

export function* changeProjectTag(ev: any) {
  const { data } = ev;
  const { projectTag } = data;

  yield delay(100);

  const appState = yield* select(selectors.raw.$rawAppState);
  const { tags = [] } = appState;

  // remove
  const newTags = tags.filter((tag) => !tag.startsWith('project-'));
  newTags.push(projectTag);
  yield put(actions.appState.patch({ tags: newTags }));

  toast.show('Project tag changed');
}

export function* root() {
  let channel: any;

  yield* fork(bootstrapTags);

  channel = customEvenChannel('tag/project/set');
  yield* takeEvery(channel, changeProjectTag);
}

export const saga = {
  id: 'gdi.tags',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
