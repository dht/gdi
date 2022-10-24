import React from 'react';
import { Container, Tab, Title } from './BucketTabs.style';
import classnames from 'classnames';

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
            <Tab
                key={tab.id}
                className={className}
                onClick={() => props.onSelect(tab.id)}
            >
                <Title>{text}</Title>
            </Tab>
        );
    }

    function renderTabs() {
        return tabs.map((tab) => renderTab(tab));
    }

    return (
        <Container
            className='BucketTabs-container'
            data-testid='BucketTabs-container'
        >
            {renderTabs()}
        </Container>
    );
}

export default BucketTabs;
