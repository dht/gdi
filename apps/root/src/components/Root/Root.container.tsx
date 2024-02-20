import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Root } from './Root';

export type RootContainerProps = {};

export function RootContainer(_props: RootContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { root, showRoot } = appState;

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  if (!showRoot) {
    return null;
  }

  return <Root root={root} />;
}

export default RootContainer;
