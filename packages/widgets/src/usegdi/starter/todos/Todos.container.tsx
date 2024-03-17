import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Todos } from './Todos';
import { useSagas } from '../../../helpers/useSaga';

export type TodosContainerProps = {
  data: any;
};

export function TodosContainer(props: TodosContainerProps) {
  const dispatch = useDispatch();
  const todos = useSelector(selectors.base.$todos);

  useSagas([
    'widgets.todos', //
    'widgets.todo',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'TODO',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'TODO',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Todos data={todos} callbacks={callbacks} />;
}

export default TodosContainer;
