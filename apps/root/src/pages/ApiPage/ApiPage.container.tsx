import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ApiPage } from './ApiPage';
import { invokeEvent } from 'shared-base';

export type ApiPageContainerProps = {};

export function ApiPageContainer(_props: ApiPageContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onSave: (data: Json) => {
        invokeEvent('saveKeys', data);
      },
    }),
    []
  );

  return <ApiPage callbacks={callbacks} />;
}

export default ApiPageContainer;
