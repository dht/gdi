import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CapabilitiesPage } from './CapabilitiesPage';

export type CapabilitiesPageContainerProps = {};

export function CapabilitiesPageContainer(
  _props: CapabilitiesPageContainerProps
) {
  const dispatch = useDispatch();
  const capabilities = useSelector(selectors.base.$capabilities);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <CapabilitiesPage capabilities={capabilities} />;
}

export default CapabilitiesPageContainer;
