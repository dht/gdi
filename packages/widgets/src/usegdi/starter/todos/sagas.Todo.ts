import { selectors, ITodos, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseTodosChange } from './Todos.utils';
import { guid4 } from 'shared-base';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'TODO';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addTodo,
  edit: editTodo,
  delete: deleteTodo,
};

export function* addTodo(action: Action, item: ITodos) {
  const { payload } = action;
  const { data } = payload;

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.todos.add({
      id: guid4(),
      ...data,
    })
  );
}

export function* editTodo(action: Action, item: ITodos) {
  const { id, payload } = action;

  const change = parseTodosChange(payload);

  yield put(actions.todos.patch(id, change));
}

export function* deleteTodo(action: Action, item: ITodos) {
  const { id, payload } = action;

  yield put(actions.todos.delete(id));
}

export function* todo(action: any) {
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
  yield takeEvery('TODO', todo);
}

export const saga = {
  id: 'widgets.todo',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['TODO'],
  },
};
