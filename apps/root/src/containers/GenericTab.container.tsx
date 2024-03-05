import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { ApiKeys, TopBar } from '@gdi/ui';
import CreditsContainer from './Credits.container';
import UserMenuContainer from './UserMenu.container';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { invokeEvent } from 'shared-base';

export type GenericTabsContainerProps = {
  tabs: any[];
  defaultTab: string;
};

export function GenericTabsContainer(props: GenericTabsContainerProps) {
  const { tabs, defaultTab } = props;
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const tabId = useLocation().hash.replace('#', '') || defaultTab;

  const { isApiKeyOk } = appState;

  const callbacks = useMemo(
    () => ({
      onChangeTab: (tabId: string) => {
        document.location.hash = tabId;
      },
      onNavigate: (path: string) => {
        invokeEvent('nav', { path });
      },
    }),
    []
  );

  return (
    <TopBar tabId={tabId} tabs={tabs} onChange={callbacks.onChangeTab}>
      <ApiKeys
        isApiKeyOk={isApiKeyOk}
        onClick={() => callbacks.onNavigate('/account')}
      />
      <CreditsContainer />
      <UserMenuContainer />
    </TopBar>
  );
}

export default GenericTabsContainer;
