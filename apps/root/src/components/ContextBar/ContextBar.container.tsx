import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ContextBar } from './ContextBar';

export type ContextBarContainerProps = {};

export function ContextBarContainer(_props: ContextBarContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <ContextBar />;
}

export default ContextBarContainer;
