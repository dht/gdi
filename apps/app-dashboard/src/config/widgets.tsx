import React from 'react';
import { IWidget } from '@gdi/platformer';
import { OverviewContainer } from '../containers/OverviewContainer';

export enum DashboardWidgets {
    Overview = 'dashboard.Overview',
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
];
