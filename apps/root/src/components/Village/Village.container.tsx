import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Village } from './Village';

export type VillageContainerProps = {
  children?: React.ReactNode;
};

export function VillageContainer(props: VillageContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <Village>{props.children}</Village>;
}

export default VillageContainer;
