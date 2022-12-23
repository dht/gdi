import React from 'react';

import { Wrapper, IWidget } from '@gdi/platformer';
import { actions } from '../store';
import { APP_ID } from './ids';

const Overview3dContainer = React.lazy(() => import('../containers/Overview3dContainer')); // prettier-ignore
const OverviewBarContainer = React.lazy(() => import('../containers/OverviewBarContainer')); // prettier-ignore
const OverviewNavigateContainer = React.lazy(() => import('../containers/OverviewNavigateContainer')); // prettier-ignore
const ReaderContainer = React.lazy(() => import('../containers/ReaderContainer')); // prettier-ignore
const MainDisplayContainer = React.lazy(() => import('../containers/MainDisplayContainer')); // prettier-ignore
const ProTipContainer = React.lazy(() => import('../containers/ProTipContainer')); // prettier-ignore
const ScheduleContainer = React.lazy(() => import('../containers/ScheduleContainer')); // prettier-ignore
const SimsContainer = React.lazy(() => import('../containers/SimsContainer')); // prettier-ignore
const NotificationsContainer = React.lazy(() => import('../containers/NotificationsContainer')); // prettier-ignore

export enum StudioWidgets {
    MainDisplay = 'studio.MainDisplay',
    Reader = 'studio.Reader',
    Overview = 'studio.Overview',
    OverviewBar = 'studio.OverviewBar',
    OverviewNavigate = 'studio.OverviewNavigate',
    Schedule = 'studio.Schedule',
    Sims = 'studio.Sims',
    DomainPanel = 'studio.DomainPanel',
    ProTip = 'studio.ProTip',
    Notifications = 'studio.Notifications',
}

export const widgets: IWidget[] = [
    {
        id: StudioWidgets.MainDisplay,
        name: 'MainDisplay',
        description: 'MainDisplay',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <MainDisplayContainer {...props} />,
    },
    {
        id: StudioWidgets.Reader,
        name: 'Reader',
        description: 'Reader',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ReaderContainer {...props} />,
    },
    {
        id: StudioWidgets.Overview,
        name: 'Overview',
        description: 'Overview',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                identifier='VilleWidgets.Overview'
                component={Overview3dContainer}
                props={props}
            />
        ),
    },
    {
        id: StudioWidgets.OverviewBar,
        name: 'OverviewBar',
        description: 'OverviewBar',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={OverviewBarContainer}
                props={props}
            />
        ),
    },
    {
        id: StudioWidgets.OverviewNavigate,
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
    {
        id: StudioWidgets.Sims,
        name: 'Sims',
        description: 'Sims',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={SimsContainer} props={props} />
        ),
    },

    {
        id: StudioWidgets.ProTip,
        name: 'ProTip',
        description: 'ProTip',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={ProTipContainer} props={props} />
        ),
    },
    {
        id: StudioWidgets.Schedule,
        name: 'ProTip',
        description: 'Schedule',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ScheduleContainer}
                props={props}
            />
        ),
    },
    {
        id: StudioWidgets.Sims,
        name: 'Sims',
        description: 'Sims',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={SimsContainer} props={props} />
        ),
    },
    {
        id: StudioWidgets.Notifications,
        name: 'Notifications',
        description: 'Notifications',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={NotificationsContainer}
                props={props}
            />
        ),
    },
];
