import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { TopBar } from '@gdi/ui';
import { useMemo } from 'react';
import UserMenuContainer from './UserMenu.container';
import { tabs } from './MuxTabs.data';

export type MuxTabsContainerProps = {};

export function MuxTabsContainer(_props: MuxTabsContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const tabs2 = useSelector(selectors.base.$muxTabs);
  const { muxTabId } = currentIds;

  console.log('muxTabId1 ->', muxTabId);

  const callbacks = useMemo(
    () => ({
      onChange: (tabId: string) => {
        console.log('tabId ->', tabId);

        dispatch(actions.currentIds.patch({ muxTabId: tabId }));
      },
    }),
    []
  );

  return (
    <TopBar tabId={muxTabId} tabs={tabs} onChange={callbacks.onChange}>
      <UserMenuContainer />
    </TopBar>
  );
}

export default MuxTabsContainer;
