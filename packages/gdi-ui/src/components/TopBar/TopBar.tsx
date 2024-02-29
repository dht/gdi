import React from 'react';
import TabsBig from '../TabsBig/TabsBig';
import { Action, Actions, Tabs, Wrapper } from './TopBar.style';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { invokeEvent } from 'shared-base';

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

  function onFullScreen() {
    invokeEvent('fullscreen/toggle');
  }

  return (
    <Wrapper className='TopBar-wrapper' data-testid='TopBar-wrapper'>
      <Container row>
        <Tabs>{renderTabs()}</Tabs>
        <Actions>
          <Action>
            <Icon color='#777' name='fullscreen' onClick={onFullScreen} />
          </Action>
          {props.children}
        </Actions>
      </Container>
    </Wrapper>
  );
}

export default TopBar;
