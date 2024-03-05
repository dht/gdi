import GroupPageContainer from '../containers/GroupPage.container';

const tabs = [
  {
    id: 'assets',
    title: 'Assets',
  },
  {
    id: 'data',
    title: 'Data',
  },
];

export function AssetsGroupContainer(_props: any) {
  return <GroupPageContainer tabs={tabs} defaultTab='assets' />;
}

export default AssetsGroupContainer;
