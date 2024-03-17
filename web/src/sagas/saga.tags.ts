import { IBoard, actions, selectors } from '@gdi/store-base';
import { prompt, toast } from '@gdi/ui';
import { isEmpty } from 'lodash';
import { delay, fork, put, select } from 'saga-ts';
import { getJson, getString, invokeEvent, setJson, setString } from 'shared-base';
import { takeEvery } from 'typed-redux-saga';
import { ProjectModalContainer } from '../containers/ProjectModal.container';
import { TagPickerContainer } from '../containers/TagsModal.container';
import { customEvenChannel } from './channels/channel.customEvent';
import { ensureProjectTag, ensureTags } from './helpers/saga.createTags';

const LOCAL_STORAGE_TAGS_KEY = 'tags';
const LOCAL_STORAGE_PROJECT_KEY = 'projectId';

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
  yield fork(ensureTags, value);

  setJson(LOCAL_STORAGE_TAGS_KEY, value);
}

export function* showProjectPicker(_action: any, _board: IBoard) {
  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const { projectId } = currentIds;

  const { value, didCancel } = yield prompt.custom({
    title: 'Select or create a project',
    component: ProjectModalContainer,
    componentProps: {},
  });

  if (didCancel) {
    return;
  }

  const newProjectId = value[0] ?? '';
  yield put(actions.currentIds.patch({ projectId: newProjectId }));
  setString(LOCAL_STORAGE_PROJECT_KEY, newProjectId);

  // project was cleared
  if (isEmpty(value) && projectId) {
    return;
  }

  yield fork(ensureProjectTag, newProjectId);
}

export function* bootstrapTags() {
  try {
    const tags = getJson(LOCAL_STORAGE_TAGS_KEY);

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

export function* bootstrapProject() {
  try {
    const projectId = getString(LOCAL_STORAGE_PROJECT_KEY);

    if (!projectId) {
      return;
    }
    yield put(actions.currentIds.patch({ projectId }));
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.tags.ts',
      method: 'bootstrapProject',
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
  const newTags = tags.filter((tag: any) => !tag.startsWith('project-'));
  newTags.push(projectTag);
  yield put(actions.appState.patch({ tags: newTags }));

  toast.show('Project tag changed');
}

export function* root() {
  let channel: any;

  yield* fork(bootstrapTags);
  yield* fork(bootstrapProject);

  channel = customEvenChannel('tag/project/set');
  yield* takeEvery(channel, changeProjectTag);
}

export const saga = {
  id: 'gdi.tags',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
