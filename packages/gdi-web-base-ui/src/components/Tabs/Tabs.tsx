import classnames from 'classnames';
import React, { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { Tab, Wrapper } from './Tabs.style';
import { useLanguage } from '@gdi/language';

export type TabData = {
    id: string;
    label: string;
    pathName: string;
};

export type TabsProps = {
    tabs: TabData[];
    selectedTabId: string;
};

export function Tabs(props: TabsProps) {
    const { tabs, selectedTabId } = props;
    const { tj } = useLanguage();

    const tabsTranslated = useMemo(() => {
        return tj(tabs);
    }, [tabs]);

    function onClick(tab: TabData) {
        invokeEvent('navigate', { path: tab.pathName });
    }

    function renderTab(tab: TabData) {
        const { label } = tab;

        const className = classnames('tab', {
            selected: selectedTabId === tab.id,
        });

        return (
            <Tab
                key={tab.id}
                className={className}
                onClick={() => onClick(tab)}
            >
                {label}
            </Tab>
        );
    }

    function renderTabs() {
        return tabsTranslated.map((tab: TabData) => renderTab(tab));
    }

    return (
        <Wrapper className='Tabs-wrapper' data-testid='Tabs-wrapper'>
            {renderTabs()}
        </Wrapper>
    );
}

export default Tabs;
