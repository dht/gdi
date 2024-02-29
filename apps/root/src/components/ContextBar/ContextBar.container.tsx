import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ContextBar } from './ContextBar';

export type ContextBarContainerProps = {};

export function ContextBarContainer(_props: ContextBarContainerProps) {
  const capability = useSelector(selectors.mux.$capability);

  const hideWelcome = capability !== undefined;

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <ContextBar hideWelcome={hideWelcome} />;
}

export default ContextBarContainer;
