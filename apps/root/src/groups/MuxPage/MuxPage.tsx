import { Board } from '@gdi/app-boards';
import MuxContainer from '../../components/Mux/Mux.container';
import MuxTabsContainer from '../../containers/MuxTabs.container';
import { Inner, Top, Wrapper } from './MuxPage.style';
import { IMuxTab } from '@gdi/store-base';

export type MuxPageProps = {
  tabs: IMuxTab[];
  tabId?: string;
};

export function MuxPage(props: MuxPageProps) {
  const { tabs, tabId = 'home' } = props;

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
