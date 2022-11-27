import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const ConsoleContainer = React.lazy(() => import('../containers/ConsoleContainer')); // prettier-ignore
const StoreSizeContainer = React.lazy(() => import('../containers/StoreSizeContainer')); // prettier-ignore
const ReduxConnectedDevtoolsContainer = React.lazy(() => import('../containers/ReduxConnectedDevtoolsContainer')); // prettier-ignore
const HoustonContainer = React.lazy(() => import('../containers/HoustonContainer')); // prettier-ignore
const LoginCycleContainer = React.lazy(() => import('../containers/LoginCycleContainer')); // prettier-ignore

export enum DevtoolsWidgets {
    Console = 'devtools.Console',
    ReduxConnectedDevtools = 'devtools.ReduxConnectedDevtools',
    StoreSize = 'devtools.StoreSize',
    Houston = 'devtools.Houston',
    Users = 'devtools.Users',
    Minimal = 'devtools.Minimal',
    LoginCycle = 'devtools.LoginCycle',
    Catalog = 'devtools.Catalog',
}

export const widgets: IWidget[] = [
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
        id: DevtoolsWidgets.Houston,
        name: 'Houston',
        description: 'Houston',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={HoustonContainer}
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
