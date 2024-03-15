import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Tier } from './Tier';

export type TierContainerProps = {};

export function TierContainer(_props: TierContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { focusTier } = appState;

  const callbacks = useMemo(
    () => ({
      onChange: (value: number) => {
        dispatch(actions.appState.patch({ focusTier: value }));
      },
    }),
    []
  );

  return <Tier value={focusTier} onChange={callbacks.onChange} />;
}

export default TierContainer;
