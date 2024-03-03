import { Container, TopBar } from '@gdi/ui';
import { MuxApisContainer } from '../../components/MuxApis/MuxApis.container';
import { MuxBoardsContainer } from '../../components/MuxBoards/MuxBoards.container';
import { MuxCapabilitiesContainer } from '../../components/MuxCapabilities/MuxCapabilities.container';
import UserMenuContainer from '../../containers/UserMenu.container';
import { tabs } from './CapabilitiesPage.data';
import { Wrapper } from './CapabilitiesPage.style';

export type CapabilitiesPageProps = {
  tab: string;
  callbacks: {
    onChangeTab: (tabId: string) => void;
  };
};

export function CapabilitiesPage(props: CapabilitiesPageProps) {
  const { tab, callbacks } = props;

  function renderInner() {
    switch (tab) {
      case 'capabilities':
        return <MuxCapabilitiesContainer />;
      case 'apis':
        return <MuxApisContainer />;
      case 'boards':
        return <MuxBoardsContainer />;
      default:
        return null;
    }
  }

  return (
    <Wrapper
      className='CapabilitiesPage-wrapper'
      data-testid='CapabilitiesPage-wrapper'
    >
      <TopBar
        tabId={tab}
        tabs={tabs}
        onChange={callbacks.onChangeTab}
        hashEnabled
      >
        <UserMenuContainer />
      </TopBar>
      <Container>{renderInner()}</Container>
    </Wrapper>
  );
}

export default CapabilitiesPage;
