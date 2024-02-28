import React from 'react';
import TabsBig from '../TabsBig/TabsBig';
import { Actions, Tabs, Wrapper } from './TopBar.style';

export type TopBarProps = {
  tabs: Json[];
  tabId: string;
  onChange: (tab: string) => void;
  children?: React.ReactNode;
};

export function TopBar(props: TopBarProps) {
  const { tabs, tabId } = props;

  function renderTabs() {
    return <TabsBig tabs={tabs} activeTab={tabId} onChange={props.onChange} />;
  }

  return (
    <Wrapper className='TopBar-wrapper' data-testid='TopBar-wrapper'>
      <Tabs>{renderTabs()}</Tabs>
      <Actions>{props.children}</Actions>
    </Wrapper>
  );
}

export default TopBar;
