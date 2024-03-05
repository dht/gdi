import GroupPageContainer from '../containers/GroupPage.container';

const tabs = [
  {
    id: 'flows',
    title: 'Current Flow',
  },
];

export function FlowsGroupContainer(_props: any) {
  return <GroupPageContainer tabs={tabs} defaultTab='flows' />;
}

export default FlowsGroupContainer;
