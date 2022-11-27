import React from 'react';

const AccountContainer = React.lazy(() => import('../containers/AccountContainer')); // prettier-ignore
const ActiveAppsContainer = React.lazy(() => import('../containers/ActiveAppsContainer')); // prettier-ignore
const SettingsContainer = React.lazy(() => import('../containers/SettingsContainer')); // prettier-ignore
const SitePropertiesContainer = React.lazy(() => import('../containers/SitePropertiesContainer')); // prettier-ignore

import { IWidget, Wrapper } from '@gdi/platformer';
import { actions } from '../store';
import { APP_ID } from './ids';

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
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={SettingsContainer}
                props={props}
            />
        ),
    },
    {
        id: SettingsWidgets.SiteProperties,
        name: 'SiteProperties',
        description: 'SiteProperties',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={SitePropertiesContainer}
                props={props}
            />
        ),
    },
    {
        id: SettingsWidgets.Account,
        name: 'Account',
        description: 'Account',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={AccountContainer}
                props={props}
            />
        ),
    },
    {
        id: SettingsWidgets.ActiveApps,
        name: 'ActiveApps',
        description: 'ActiveApps',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ActiveAppsContainer}
                props={props}
            />
        ),
    },
];
