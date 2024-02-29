import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CtxWelcome } from './CtxWelcome';

export type CtxWelcomeContainerProps = {};

export function CtxWelcomeContainer(_props: CtxWelcomeContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { is24Hours } = appState;

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <CtxWelcome is24Hours={is24Hours} />;
}

export default CtxWelcomeContainer;
