import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { PplSwitch } from './PplSwitch';

export type PplSwitchContainerProps = {};

export function PplSwitchContainer(_props: PplSwitchContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { tabId } = currentIds;

  const callbacks = useMemo(
    () => ({
      onChange: (value: string) => {
        dispatch(actions.currentIds.patch({ tabId: value }));
      },
    }),
    []
  );

  return <PplSwitch tabId={tabId} callbacks={callbacks} />;
}

export default PplSwitchContainer;
