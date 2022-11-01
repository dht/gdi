import React from 'react';
import { BabylonContainer } from '../containers/BabylonContainer';
import { IWidget, Wrapper } from '@gdi/platformer';
import { LogoContainer } from '../containers/LogoContainer';
import { ScheduleContainer } from '../containers/ScheduleContainer';
import { PoeContainer } from '../containers/PoeContainer';
import { SwitcherContainer } from '../containers/SwitcherContainer';
import { IdeasContainer } from '../containers/IdeasContainer';
import { IsoBrowserContainer } from '../containers/IsoBrowserContainer';
import { DomainHeaderContainer } from '../containers/DomainHeaderContainer';
import { DomainPanelContainer } from '../containers/DomainPanelContainer';
import { DomainHistoryContainer } from '../containers/DomainHistoryContainer';
import { ProTipContainer } from '../containers/ProTipContainer';
import { RatingContainer } from '../containers/RatingContainer';
import { LegendContainer } from '../containers/LegendContainer';
import { APP_ID } from './ids';

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
