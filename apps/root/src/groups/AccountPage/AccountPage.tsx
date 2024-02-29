import { TabsBig, TopBar } from '@gdi/ui';
import MuxApisContainer from '../../components/MuxApis/MuxApis.container';
import UserMenuContainer from '../../containers/UserMenu.container';
import SettingsPageContainer from '../../pages/SettingsPage/SettingsPage.container';
import { tabs } from './AccountPage.data';
import { Wrapper } from './AccountPage.style';
import { useState } from 'react';
import ApiPageContainer from '../../pages/ApiPage/ApiPage.container';

export type AccountPageProps = {
  tab: string;
  callbacks: {
    onChangeTab: (tabId: string) => void;
  };
};

export function AccountPage(props: AccountPageProps) {
  const { tab, callbacks } = props;

  function renderInner() {
    switch (tab) {
      case 'api_keys':
        return <ApiPageContainer />;
      case 'settings':
        return <SettingsPageContainer />;
      default:
        return null;
    }
  }

  return (
    <Wrapper>
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

export default AccountPage;
