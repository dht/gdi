import React from 'react';
import { CurrentIdsHoc, IWidget } from '@gdi/platformer';
import { OverviewContainer } from '../containers/OverviewContainer';
import { OverviewNavigateContainer } from '../containers/OverviewNavigateContainer';
import { actions } from '../store';

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
        component: (props: any) => <OverviewContainer {...props} />,
    },
    {
        id: DashboardWidgets.OverviewNavigate,
        name: 'OverviewNavigate',
        description: 'OverviewNavigate',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) =>
            CurrentIdsHoc(actions.currentIdsDashboard.patch)(
                <OverviewNavigateContainer {...props} />
            ),
    },
];
