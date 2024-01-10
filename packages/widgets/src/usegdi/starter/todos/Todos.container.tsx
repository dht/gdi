import { Json } from 'igrid';
import { useMemo } from 'react';
import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import Todos from './Todos';

export type TodosPageContainerProps = {};

export function TodosPageContainer(props: TodosPageContainerProps) {
  const dispatch = useDispatch();
  const todos = useSelector(selectors.raw.$rawTodos);

  const callbacks = useMemo(
    () => ({
      onAddTodo: (todo: Json) => {
        dispatch(actions.todos.add(todo));
      },
      onRemoveTodo: (todo: Json) => {
        dispatch(actions.todos.delete(todo.id));
      },
      onEditTodo: (todo: Json, change: Json) => {
        dispatch(actions.todos.patch(todo.id, change));
      },
      onRandomTodo: () => {
        // dispatch(actions.todos.patch(todo.id, change));
      },
    }),
    [todos]
  );

  return <Todos todos={todos} callbacks={callbacks} />;
}

export default TodosPageContainer;
