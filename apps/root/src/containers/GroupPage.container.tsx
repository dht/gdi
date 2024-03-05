import { useLocation } from 'react-router-dom';
import { useMount } from 'react-use';
import styled from 'styled-components';
import { pages } from '../pages';
import { GenericTabsContainer } from './GenericTab.container';

export type GroupPageContainerProps = {
  tabs: any[];
  defaultTab: string;
};

export function GroupPageContainer(props: GroupPageContainerProps) {
  const { tabs, defaultTab } = props;
  const tab = useLocation().hash.replace('#', '') || defaultTab;

  useMount(() => {
    document.location.hash = defaultTab;
  });

  function renderInner() {
    const Cmp = (pages as any)[tab];

    if (!Cmp) return;

    return <Cmp />;
  }

  return (
    <Wrapper>
      <GenericTabsContainer tabs={tabs} defaultTab='capabilities' />
      {renderInner()}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
`;

export default GroupPageContainer;
