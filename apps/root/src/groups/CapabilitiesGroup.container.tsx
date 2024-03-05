import GroupPageContainer from '../containers/GroupPage.container';

const tabs = [
  {
    id: 'capabilities',
    title: 'Capabilities',
  },
  {
    id: 'apis',
    title: 'APIs',
  },
  {
    id: 'boards',
    title: 'Boards',
  },
];

export function CapabilitiesGroupContainer(_props: any) {
  return <GroupPageContainer tabs={tabs} defaultTab='capabilities' />;
}

export default CapabilitiesGroupContainer;
