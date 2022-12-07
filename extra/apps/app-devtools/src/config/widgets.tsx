import React from 'react';
import { APP_ID } from './ids';
import { IWidget, Wrapper } from '@gdi/platformer';

const ConsoleContainer = React.lazy(() => import('../containers/ConsoleContainer')); // prettier-ignore
const StoreSizeContainer = React.lazy(() => import('../containers/StoreSizeContainer')); // prettier-ignore
const ReduxConnectedDevtoolsContainer = React.lazy(() => import('../containers/ReduxConnectedDevtoolsContainer')); // prettier-ignore
const LoginCycleContainer = React.lazy(() => import('../containers/LoginCycleContainer')); // prettier-ignore
const LocalDataViewerContainer = React.lazy(() => import('../containers/LocalDataViewerContainer')); // prettier-ignore

export enum DevtoolsWidgets {
    LocalDataViewer = 'devtools.LocalDataViewer',
    Console = 'devtools.Console',
    ReduxConnectedDevtools = 'devtools.ReduxConnectedDevtools',
    StoreSize = 'devtools.StoreSize',
    Users = 'devtools.Users',
    Minimal = 'devtools.Minimal',
    LoginCycle = 'devtools.LoginCycle',
    Catalog = 'devtools.Catalog',
}

export const widgets: IWidget[] = [
    {
        id: DevtoolsWidgets.LocalDataViewer,
        name: 'LocalDataViewer',
        description: 'LocalDataViewer',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <LocalDataViewerContainer {...props} />,
    },

    {
        id: DevtoolsWidgets.Console,
        name: 'Console',
        description: 'Console',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ConsoleContainer {...props} />,
    },
    {
        id: DevtoolsWidgets.StoreSize,
        name: 'StoreSize',
        description: 'Redux store size',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={StoreSizeContainer}
                props={props}
            />
        ),
    },
    {
        id: DevtoolsWidgets.ReduxConnectedDevtools,
        name: 'ReduxConnectedDevtools',
        description: 'Redux connected devtools',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ReduxConnectedDevtoolsContainer}
                props={props}
            />
        ),
    },
    {
        id: DevtoolsWidgets.LoginCycle,
        name: 'LoginCycle',
        description: 'LoginCycle',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={LoginCycleContainer}
                props={props}
            />
        ),
    },
];
