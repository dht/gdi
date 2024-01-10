import { runFunction } from '@gdi/firebase';
import { ITag, actions, selectors } from '@gdi/store-base';
import { prompt, toast } from '@gdi/ui';
import { uniq } from 'lodash';
import { call, put, select } from 'saga-ts';

export function* verifyProject() {
  const appState = yield* select(selectors.raw.$rawAppState);
  const { tags = [] } = appState;

  const projectTag = yield* select(selectors.base.$projectTag);

  if (projectTag) {
    return projectTag;
  }

  const { value, didCancel } = yield prompt.input({
    title: 'Project Name',
    placeholder: 'Set a project name',
    ctaButtonText: 'Set Project',
  });

  if (didCancel || !value) {
    return;
  }

  const newTag = 'project-' + value.replace('project-', '');
  tags.push(newTag);
  yield put(actions.appState.patch({ tags: uniq(tags) }));

  const allTags = yield* select(selectors.raw.$rawTags);
  const tag = Object.values(allTags).find((tag: ITag) => tag.id === newTag);

  if (!tag) {
    const response = yield* call(runFunction, '/api/tags/new', {
      tagValue: newTag,
    });

    const { tag } = response;

    yield put(actions.tags.set(tag.id, tag));
  }

  return value;
}
