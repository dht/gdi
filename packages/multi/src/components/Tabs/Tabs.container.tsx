import { useContext, useMemo } from 'react';
import { MultiContext } from '../Multi/Multi.context';
import Tabs from './Tabs';
import { getTabs } from './Tabs.data';

export type TabsContainerProps = {};

export function TabsContainer(_props: TabsContainerProps) {
  const { state, callbacks, patchState } = useContext(MultiContext);

  const tabs = useMemo(() => {
    return getTabs(state.views);
  }, [state.views]);

  if (tabs.length <= 1) {
    return null;
  }

  return (
    <Tabs
      tabs={tabs}
      activeTab={state.activeView}
      onChange={(tabId) => patchState({ activeView: tabId as any })}
    />
  );
}

export default TabsContainer;
