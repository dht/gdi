import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { CapabilitiesPage } from './CapabilitiesPage';
import { useMount } from 'react-use';

export type CapabilitiesPageContainerProps = {};

export function CapabilitiesPageContainer(
  _props: CapabilitiesPageContainerProps
) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const tab = useLocation().hash.replace('#', '') || 'capabilities';

  useMount(() => {
    document.location.hash = 'capabilities';
  });

  const callbacks = useMemo(
    () => ({
      onChangeTab: (tabId: string) => {
        document.location.hash = tabId;
      },
    }),
    []
  );

  return <CapabilitiesPage tab={tab} callbacks={callbacks} />;
}

export default CapabilitiesPageContainer;
