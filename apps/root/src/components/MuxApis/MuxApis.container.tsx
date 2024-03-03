import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxApis } from './MuxApis';

export type MuxApisContainerProps = {};

export function MuxApisContainer(_props: MuxApisContainerProps) {
  const dispatch = useDispatch();
  const apiProviders = useSelector(selectors.base.$apiProviders);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <MuxApis apiProviders={apiProviders} />;
}

export default MuxApisContainer;
