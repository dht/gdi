import { put, select } from 'saga-ts';
import { ITag, actions, selectors } from '@gdi/store-base';

export function* ensureTag(id: string) {
  const tags = yield* select(selectors.raw.$rawTags);

  const isProjectTag = id.startsWith('project-');
  const exists = Object.keys(tags).includes(id);

  if (exists) return;

  const newTag: ITag = {
    id,
    isProjectTag,
    isActive: true,
    tsAdded: Date.now(),
  };

  yield put(actions.tags.add(newTag));
}

export function* ensureTags(tags: string[]) {
  for (const tag of tags) {
    yield ensureTag(tag);
  }
}

export function* ensureProjectTag(projectTag: string) {
  yield ensureTag(`project-${projectTag}`);
}
