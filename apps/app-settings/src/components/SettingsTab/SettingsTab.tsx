import React, { useMemo } from 'react';
import classnames from 'classnames';
import { invokeEvent } from 'shared-base';
import { Tab, Wrapper } from './SettingsTab.style';
import { useLanguage } from '@gdi/language';

export type TabData = {
    id: string;
    label: string;
    pathName: string;
};

export type SettingsTabProps = {
    tabs: TabData[];
    selectedTabId: string;
};

export function SettingsTab(props: SettingsTabProps) {
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
        <Wrapper
            className='SettingsTab-wrapper'
            data-testid='SettingsTab-wrapper'
        >
            {renderTabs()}
        </Wrapper>
    );
}

export default SettingsTab;
