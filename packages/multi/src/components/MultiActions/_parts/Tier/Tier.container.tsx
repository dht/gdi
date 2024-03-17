import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Tier } from './Tier';
import { calcNextValue, parseTier } from './Tier.utils';

export type TierContainerProps = {};

export function TierContainer(_props: TierContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { focusTiers } = appState;

  const callbacks = useMemo(
    () => ({
      onChange: (value: string) => {
        const newValue = calcNextValue(focusTiers, value);
        dispatch(actions.appState.patch({ focusTiers: newValue }));
      },
    }),
    [focusTiers]
  );

  return <Tier value={focusTiers} onChange={callbacks.onChange} />;
}

export default TierContainer;
