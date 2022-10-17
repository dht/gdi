import React from 'react';
import { AccountContainer } from '../containers/AccountContainer';
import { ActiveAppsContainer } from '../containers/ActiveAppsContainer';
import { SettingsContainer } from '../containers/SettingsContainer';
import { SitePropertiesContainer } from '../containers/SitePropertiesContainer';
import { IWidget } from '@gdi/platformer';
import { actions } from '../store';

export enum SettingsWidgets {
    Settings = 'settings.Settings',
    SiteProperties = 'settings.SiteProperties',
    Account = 'settings.Account',
    ActiveApps = 'settings.ActiveApps',
}
export const widgets: IWidget[] = [
    {
        id: SettingsWidgets.Settings,
        name: 'Settings',
        description: 'Settings',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SettingsContainer {...props} />,
    },
    {
        id: SettingsWidgets.SiteProperties,
        name: 'SiteProperties',
        description: 'SiteProperties',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SitePropertiesContainer {...props} />,
    },
    {
        id: SettingsWidgets.Account,
        name: 'Account',
        description: 'Account',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <AccountContainer {...props} />,
    },
    {
        id: SettingsWidgets.ActiveApps,
        name: 'ActiveApps',
        description: 'ActiveApps',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ActiveAppsContainer {...props} />,
    },
];
