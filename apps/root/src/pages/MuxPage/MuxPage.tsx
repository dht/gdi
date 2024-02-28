import React from 'react';
import { Top, Wrapper } from './MuxPage.style';
import MuxContainer from '../../components/Mux/Mux.container';
import MuxOverlayContainer from '../../components/MuxOverlay/MuxOverlay.container';
import { IMuxTab } from '@gdi/store-base';
import { Board } from '@gdi/app-boards';
import MuxTabsContainer from '../../containers/MuxTabs.container';

export type MuxPageProps = {
  tab: IMuxTab;
  tabId?: string;
};

export function MuxPage(props: MuxPageProps) {
  const { tab, tabId = 'home' } = props;

  function renderInner() {
    if (tabId === 'home') {
      return <MuxContainer />;
    } else {
      return <Board id='B-001' darkMode />;
    }
  }

  return (
    <Wrapper className='MuxPage-wrapper' data-testid='MuxPage-wrapper'>
      <Top>
        <MuxTabsContainer />
      </Top>
      {renderInner()}
    </Wrapper>
  );
}

export default MuxPage;
