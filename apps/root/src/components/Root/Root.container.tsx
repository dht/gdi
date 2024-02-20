import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
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
      onClose: () => {
        dispatch(actions.appState.patch({ showRoot: false }));
      },
    }),

    []
  );

  if (!showRoot) {
    return null;
  }

  return <Root callbacks={callbacks} root={root} />;
}

export default RootContainer;
