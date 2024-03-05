import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ExpressDebugger } from './ExpressDebugger';
import { useBlackBk } from '@gdi/ui';
import { useSagas } from '../../../helpers/useSaga';

export type ExpressDebuggerContainerProps = {};

export function ExpressDebuggerContainer(_props: ExpressDebuggerContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  useBlackBk();

  useSagas(['widgets.expressDebugger']);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <ExpressDebugger />;
}

export default ExpressDebuggerContainer;
