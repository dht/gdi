import { IBoard, actions, selectors } from '@gdi/store-base';
import { prompt, toast } from '@gdi/ui';
import { isEmpty } from 'lodash';
import { delay, fork, put, select } from 'saga-ts';
import { takeEvery } from 'typed-redux-saga';
import { ProjectModalContainer } from '../containers/ProjectModal.container';
import { TagPickerContainer } from '../containers/TagsModal.container';
import { customEvenChannel } from './channels/channel.customEvent';
import { ensureProjectTag, ensureTags } from './helpers/saga.createTags';

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

  // project was cleared
  if (isEmpty(value) && projectId) {
    return;
  }

  yield fork(ensureProjectTag, newProjectId);
  yield put({ type: 'PROJECT_SELECTED', projectId: newProjectId });
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

  channel = customEvenChannel('tag/project/set');
  yield* takeEvery(channel, changeProjectTag);

  channel = customEvenChannel('tag/project/select');
  yield* takeEvery(channel, showProjectPicker as any);
}

export const saga = {
  id: 'gdi.tags',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
