import { TopBar } from '@gdi/ui';
import { Wrapper } from './AssetsPage.style';
import UserMenuContainer from '../../containers/UserMenu.container';
import { tabs } from './AssetsPage.data';
import { AssetsPageContainer } from '../../pages/AssetsPage/AssetsPage.container';
import { DataPageContainer } from '../../pages/DataPage/DataPage.container';

export type AssetsPageProps = {
  tab: string;
  callbacks: {
    onChangeTab: (tabId: string) => void;
  };
};

export function AssetsPage(props: AssetsPageProps) {
  const { tab, callbacks } = props;

  function renderInner() {
    switch (tab) {
      case 'assets':
        return <AssetsPageContainer />;
      case 'settings':
        return <DataPageContainer />;
      default:
        return null;
    }
  }

  return (
    <Wrapper className='AssetsPage-wrapper' data-testid='AssetsPage-wrapper'>
      <TopBar
        tabId={tab}
        tabs={tabs}
        onChange={callbacks.onChangeTab}
        hashEnabled
      >
        <UserMenuContainer />
      </TopBar>
      {renderInner()}
    </Wrapper>
  );
}

export default AssetsPage;
