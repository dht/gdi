import { selectors } from '@gdi/store-base';
import { select, take } from 'saga-ts';
import { invokeEvent } from 'shared-base';

export function* verifyProject() {
  let projectTag = yield* select(selectors.base.$projectTag);

  if (projectTag) {
    return projectTag;
  }

  invokeEvent('tag/project/select');

  yield take('PROJECT_SELECTED');

  projectTag = yield* select(selectors.base.$projectTag);
  return projectTag;
}
