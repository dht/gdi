import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { BitLayer } from './BitLayer';

export type BitLayerContainerProps = {
  show: boolean;
};

export function BitLayerContainer(props: BitLayerContainerProps) {
  const { show } = props;
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  if (!show) {
    return null;
  }

  return <BitLayer />;
}

export default BitLayerContainer;
