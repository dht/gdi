import { selectors, IPosts } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'POSTS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* posts(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const posts = yield* select(selectors.raw.$rawPosts);
  const item = posts[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('POSTS', posts);
}

export const saga = {
  id: 'widgets.posts',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['POSTS'],
  },
};
