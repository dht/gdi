import { selectors, IPosts, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parsePostsChange } from './Posts.utils';
import { guid4 } from 'shared-base';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'POST';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addPost,
  edit: editPost,
  delete: deletePost,
};

export function* addPost(action: Action, item: IPosts) {
  const { payload } = action;
  const { data } = payload;

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.posts.add({
      id: guid4(),
      ...data,
    })
  );
}

export function* editPost(action: Action, item: IPosts) {
  const { id, payload } = action;

  const change = parsePostsChange(payload);

  yield put(actions.posts.patch(id, change));
}

export function* deletePost(action: Action, item: IPosts) {
  const { id, payload } = action;

  yield put(actions.posts.delete(id));
}

export function* post(action: any) {
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
  yield takeEvery('POST', post);
}

export const saga = {
  id: 'widgets.post',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['POST'],
  },
};
