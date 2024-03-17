import { selectors, ITodos } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'TODOS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* todos(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const todos = yield* select(selectors.raw.$rawTodos);
  const item = todos[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('TODOS', todos);
}

export const saga = {
  id: 'widgets.todos',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['TODOS'],
  },
};
