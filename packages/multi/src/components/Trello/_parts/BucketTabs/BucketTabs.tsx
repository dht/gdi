import React from 'react';
import { Container, Svg, Tab, Title } from './BucketTabs.style';
import classnames from 'classnames';
import { IOption } from '../../Trello.types';

export type BucketTabsProps = {
  tabs: IOption[];
  selectedTabId?: string;
  onSelect: (tabId: string) => void;
};

export function BucketTabs(props: BucketTabsProps) {
  const { tabs, selectedTabId } = props;

  function renderTab(tab: IOption) {
    const { text } = tab;

    const isSelected = selectedTabId === tab.id;

    const className = classnames('tab', {
      selected: isSelected,
    });

    return (
      <Tab key={tab.id} className={className} onClick={() => props.onSelect(tab.id)}>
        <Svg width='120' height='28'>
          <polygon points='0,0 120,0 100,28, 20,28' />
        </Svg>
        <Title className='title'>{text}</Title>
      </Tab>
    );
  }

  function renderTabs() {
    return tabs.map((tab) => renderTab(tab));
  }

  return (
    <Container className='BucketTabs-container' data-testid='BucketTabs-container'>
      {renderTabs()}
    </Container>
  );
}

export default BucketTabs;
