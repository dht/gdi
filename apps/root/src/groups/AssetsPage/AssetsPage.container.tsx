import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { AssetsPage } from './AssetsPage';
import { useLocation } from 'react-router-dom';
import { useMount } from 'react-use';

export type AssetsPageContainerProps = {};

export function AssetsPageContainer(_props: AssetsPageContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const tab = useLocation().hash.replace('#', '') || 'api_keys';

  useMount(() => {
    document.location.hash = 'assets';
  });

  const callbacks = useMemo(
    () => ({
      onChangeTab: (tabId: string) => {
        document.location.hash = tabId;
      },
    }),
    []
  );

  return <AssetsPage tab={tab} callbacks={callbacks} />;
}

export default AssetsPageContainer;
