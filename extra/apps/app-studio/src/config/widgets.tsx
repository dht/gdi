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

export enum VilleWidgets {
    MainDisplay = 'ville.MainDisplay',
    Reader = 'ville.Reader',
    Overview = 'ville.Overview',
    OverviewBar = 'ville.OverviewBar',
    OverviewNavigate = 'ville.OverviewNavigate',
    Schedule = 'ville.Schedule',
    Sims = 'ville.Sims',
    DomainPanel = 'ville.DomainPanel',
    ProTip = 'ville.ProTip',
    Notifications = 'ville.Notifications',
}

export const widgets: IWidget[] = [
    {
        id: VilleWidgets.MainDisplay,
        name: 'MainDisplay',
        description: 'MainDisplay',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <MainDisplayContainer {...props} />,
    },
    {
        id: VilleWidgets.Reader,
        name: 'Reader',
        description: 'Reader',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ReaderContainer {...props} />,
    },
    {
        id: VilleWidgets.Overview,
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
        id: VilleWidgets.OverviewBar,
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
        id: VilleWidgets.OverviewNavigate,
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
        id: VilleWidgets.Sims,
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
        id: VilleWidgets.ProTip,
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
        id: VilleWidgets.Schedule,
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
        id: VilleWidgets.Sims,
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
        id: VilleWidgets.Notifications,
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
