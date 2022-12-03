import React, { useCallback } from 'react';
import { invokeEvent } from 'shared-base';
import { Wrapper, Tab } from './SettingsTab.style';
import classnames from 'classnames';

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
        return tabs.map((tab: TabData) => renderTab(tab));
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
