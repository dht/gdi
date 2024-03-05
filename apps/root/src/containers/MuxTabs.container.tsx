import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { ApiKeys, TopBar } from '@gdi/ui';
import { useMemo } from 'react';
import UserMenuContainer from './UserMenu.container';
import CreditsContainer from './Credits.container';
import { invokeEvent } from 'shared-base';

export type MuxTabsContainerProps = {};

export function MuxTabsContainer(_props: MuxTabsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const tabs = useSelector(selectors.mux.$muxTabs);
  const { isApiKeyOk } = appState;
  const { muxTabId } = currentIds;

  const callbacks = useMemo(
    () => ({
      onChange: (tabId: string) => {
        dispatch(actions.currentIds.patch({ muxTabId: tabId }));
      },
      onNavigate: (path: string) => {
        invokeEvent('nav', { path });
      },
    }),
    []
  );

  return (
    <TopBar tabId={muxTabId} tabs={tabs} onChange={callbacks.onChange}>
      <ApiKeys
        isApiKeyOk={isApiKeyOk}
        onClick={() => callbacks.onNavigate('/account')}
      />
      <CreditsContainer />
      <UserMenuContainer />
    </TopBar>
  );
}

export default MuxTabsContainer;
