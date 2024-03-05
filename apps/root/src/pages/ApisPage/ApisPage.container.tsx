import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ApisPage } from './ApisPage';

export type ApisPageContainerProps = {};

export function ApisPageContainer(_props: ApisPageContainerProps) {
  const dispatch = useDispatch();
  const providers = useSelector(selectors.base.$apiProviders);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <ApisPage apiProviders={providers} />;
}

export default ApisPageContainer;
