import React from 'react';
import { Inner, Top, Wrapper } from './MuxPage.style';
import MuxContainer from '../../components/Mux/Mux.container';
import MuxOverlayContainer from '../../components/MuxOverlay/MuxOverlay.container';
import { IMuxTab } from '@gdi/store-base';
import { Board } from '@gdi/app-boards';
import MuxTabsContainer from '../../containers/MuxTabs.container';
import { tabs } from '../../data/data.MuxTabs';

export type MuxPageProps = {
  tab: IMuxTab;
  tabId?: string;
};

export function MuxPage(props: MuxPageProps) {
  const { tab, tabId = 'home' } = props;

  function renderInner() {
    const tab = tabs.find((t) => t.id === tabId);

    if (tabId === 'home') {
      return <MuxContainer />;
    } else {
      return <Board id={tab?.boardId} darkMode />;
    }
  }

  return (
    <Wrapper className='MuxPage-wrapper' data-testid='MuxPage-wrapper'>
      <Top>
        <MuxTabsContainer />
      </Top>
      <Inner>{renderInner()}</Inner>
    </Wrapper>
  );
}

export default MuxPage;
