import { Board } from '@gdi/app-boards';
import MuxContainer from '../../components/Mux/Mux.container';
import MuxTabsContainer from '../../containers/MuxTabs.container';
import { Inner, Top, Wrapper } from './MuxGroup.style';
import { IMuxTab } from '@gdi/store-base';

export type MuxGroupProps = {
  tabs: IMuxTab[];
  tabId?: string;
};

export function MuxGroup(props: MuxGroupProps) {
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
    <Wrapper className='MuxGroup-wrapper' data-testid='MuxGroup-wrapper'>
      <Top>
        <MuxTabsContainer />
      </Top>
      <Inner>{renderInner()}</Inner>
    </Wrapper>
  );
}

export default MuxGroup;
