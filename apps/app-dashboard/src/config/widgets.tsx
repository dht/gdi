import React from 'react';
import { Wrapper, IWidget } from '@gdi/platformer';
import { Overview3dContainer } from '../containers/Overview3dContainer';
import { OverviewNavigateContainer } from '../containers/OverviewNavigateContainer';
import { actions } from '../store';
import { APP_ID } from './ids';

export enum DashboardWidgets {
    Overview = 'dashboard.Overview',
    OverviewNavigate = 'dashboard.OverviewNavigate',
}
export const widgets: IWidget[] = [
    {
        id: DashboardWidgets.Overview,
        name: 'Overview',
        description: 'Overview',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={Overview3dContainer}
                props={props}
            />
        ),
    },
    {
        id: DashboardWidgets.OverviewNavigate,
        name: 'OverviewNavigate',
        description: 'OverviewNavigate',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={OverviewNavigateContainer}
                props={props}
                currentIdsActionCreator={actions.currentIdsDashboard.patch}
            />
        ),
    },
];
