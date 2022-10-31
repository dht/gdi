import React from 'react';
import StoreSizeContainer from '../containers/StoreSizeContainer';
import ReduxConnectedDevtoolsContainer from '../containers/ReduxConnectedDevtoolsContainer';
import HoustonContainer from '../containers/HoustonContainer';
import { LoginCycleContainer } from '../containers/LoginCycleContainer';
import { CatalogContainer } from '../containers/CatalogContainer';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

export enum DevtoolsWidgets {
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
    {
        id: DevtoolsWidgets.Catalog,
        name: 'Catalog',
        description: 'Catalog',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={CatalogContainer}
                props={props}
            />
        ),
    },
];
