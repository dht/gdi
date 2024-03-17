import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { TodosSummary } from './TodosSummary';

export type TodosSummaryContainerProps = {};

export function TodosSummaryContainer(_props: TodosSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <TodosSummary />;
}

export default TodosSummaryContainer;
