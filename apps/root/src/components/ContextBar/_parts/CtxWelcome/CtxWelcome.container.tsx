import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CtxWelcome } from './CtxWelcome';

export type CtxWelcomeContainerProps = {};

export function CtxWelcomeContainer(_props: CtxWelcomeContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const multis = useSelector(selectors.raw.$rawMultis);
  const { is24Hours } = appState;

  const callbacks = useMemo(
    () => ({
      onIconClick: (item: Json) => {
        dispatch({ type: 'TABS', verb: 'add', payload: { item } });
      },
    }),
    []
  );

  return (
    <CtxWelcome
      multis={multis}
      is24Hours={is24Hours}
      onIconClick={callbacks.onIconClick}
    />
  );
}

export default CtxWelcomeContainer;
