import React from 'react';
import { Wrapper, IWidget } from '@gdi/platformer';
import { actions } from '../store';
import { APP_ID } from './ids';

const Overview3dContainer = React.lazy(() => import('../containers/Overview3dContainer')); // prettier-ignore
const OverviewNavigateContainer = React.lazy(() => import('../containers/OverviewNavigateContainer')); // prettier-ignore

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
