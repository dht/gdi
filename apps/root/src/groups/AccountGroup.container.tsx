import GroupPageContainer from '../containers/GroupPage.container';

const tabs = [
  {
    id: 'account',
    title: 'API keys',
  },
  {
    id: 'settings',
    title: 'Settings',
  },
];

export function AccountGroupContainer(_props: any) {
  return <GroupPageContainer tabs={tabs} defaultTab='account' />;
}

export default AccountGroupContainer;
