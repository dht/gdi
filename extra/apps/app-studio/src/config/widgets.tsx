import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const BabylonContainer = React.lazy(() => import('../containers/BabylonContainer')); // prettier-ignore
const LogoContainer = React.lazy(() => import('../containers/LogoContainer')); // prettier-ignore
const ScheduleContainer = React.lazy(() => import('../containers/ScheduleContainer')); // prettier-ignore
const PoeContainer = React.lazy(() => import('../containers/PoeContainer')); // prettier-ignore
const SwitcherContainer = React.lazy(() => import('../containers/SwitcherContainer')); // prettier-ignore
const IdeasContainer = React.lazy(() => import('../containers/IdeasContainer')); // prettier-ignore
const IsoBrowserContainer = React.lazy(() => import('../containers/IsoBrowserContainer')); // prettier-ignore
const DomainHeaderContainer = React.lazy(() => import('../containers/DomainHeaderContainer')); // prettier-ignore
const DomainPanelContainer = React.lazy(() => import('../containers/DomainPanelContainer')); // prettier-ignore
const DomainHistoryContainer = React.lazy(() => import('../containers/DomainHistoryContainer')); // prettier-ignore
const ProTipContainer = React.lazy(() => import('../containers/ProTipContainer')); // prettier-ignore
const RatingContainer = React.lazy(() => import('../containers/RatingContainer')); // prettier-ignore
const LegendContainer = React.lazy(() => import('../containers/LegendContainer')); // prettier-ignore

export enum StudioWidgets {
    Babylon = 'studio.Babylon',
    Schedule = 'studio.Schedule',
    Poe = 'studio.Poe',
    Ideas = 'studio.Ideas',
    IsoBrowser = 'studio.IsoBrowser',
    Switcher = 'studio.Switcher',
    DomainHeader = 'studio.DomainHeader',
    DomainPanel = 'studio.DomainPanel',
    DomainHistory = 'studio.DomainHistory',
    ProTip = 'studio.ProTip',
    Rating = 'studio.Rating',
    Legend = 'studio.Legend',
    Logo = 'studio.Logo',
}
export const widgets: IWidget[] = [
    {
        id: StudioWidgets.Babylon,
        name: 'Babylon',
        description: 'Babylon',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={BabylonContainer}
                props={props}
            />
        ),
    },
    {
        id: StudioWidgets.Logo,
        name: 'Logo',
        description: 'Logo',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={LogoContainer} props={props} />
        ),
    },

    {
        id: StudioWidgets.Schedule,
        name: 'Schedule',
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
        id: StudioWidgets.Poe,
        name: 'Poe',
        description: 'Poe',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={PoeContainer} props={props} />
        ),
    },
    {
        id: StudioWidgets.Switcher,
        name: 'Switcher',
        description: 'Switcher',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={SwitcherContainer}
                props={props}
            />
        ),
    },
    {
        id: StudioWidgets.Ideas,
        name: 'Ideas',
        description: 'Ideas',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={IdeasContainer} props={props} />
        ),
    },
    {
        id: StudioWidgets.IsoBrowser,
        name: 'IsoBrowser',
        description: 'IsoBrowser',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={IsoBrowserContainer}
                props={props}
            />
        ),
    },
    {
        id: StudioWidgets.DomainHeader,
        name: 'DomainHeader',
        description: 'DomainHeader',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={DomainHeaderContainer}
                props={props}
            />
        ),
    },
    {
        id: StudioWidgets.DomainPanel,
        name: 'DomainPanel',
        description: 'DomainPanel',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={DomainPanelContainer}
                props={props}
            />
        ),
    },
    {
        id: StudioWidgets.DomainHistory,
        name: 'DomainHistory',
        description: 'DomainHistory',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={DomainHistoryContainer}
                props={props}
            />
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
        id: StudioWidgets.Rating,
        name: 'Rating',
        description: 'Rating',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={RatingContainer} props={props} />
        ),
    },
    {
        id: StudioWidgets.Legend,
        name: 'Legend',
        description: 'Legend',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={LegendContainer} props={props} />
        ),
    },
];
