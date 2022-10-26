import React from 'react';
import { BabylonContainer } from '../containers/BabylonContainer';
import { IWidget } from '@gdi/platformer';
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
        component: (props: any) => <BabylonContainer {...props} />,
    },
    {
        id: StudioWidgets.Logo,
        name: 'Logo',
        description: 'Logo',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <LogoContainer {...props} />,
    },

    {
        id: StudioWidgets.Schedule,
        name: 'Schedule',
        description: 'Schedule',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ScheduleContainer {...props} />,
    },
    {
        id: StudioWidgets.Poe,
        name: 'Poe',
        description: 'Poe',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <PoeContainer {...props} />,
    },
    {
        id: StudioWidgets.Switcher,
        name: 'Switcher',
        description: 'Switcher',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SwitcherContainer {...props} />,
    },
    {
        id: StudioWidgets.Ideas,
        name: 'Ideas',
        description: 'Ideas',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <IdeasContainer {...props} />,
    },
    {
        id: StudioWidgets.IsoBrowser,
        name: 'IsoBrowser',
        description: 'IsoBrowser',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <IsoBrowserContainer {...props} />,
    },
    {
        id: StudioWidgets.DomainHeader,
        name: 'DomainHeader',
        description: 'DomainHeader',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <DomainHeaderContainer {...props} />,
    },
    {
        id: StudioWidgets.DomainPanel,
        name: 'DomainPanel',
        description: 'DomainPanel',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <DomainPanelContainer {...props} />,
    },
    {
        id: StudioWidgets.DomainHistory,
        name: 'DomainHistory',
        description: 'DomainHistory',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <DomainHistoryContainer {...props} />,
    },
    {
        id: StudioWidgets.ProTip,
        name: 'ProTip',
        description: 'ProTip',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ProTipContainer {...props} />,
    },
    {
        id: StudioWidgets.Rating,
        name: 'Rating',
        description: 'Rating',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <RatingContainer {...props} />,
    },
    {
        id: StudioWidgets.Legend,
        name: 'Legend',
        description: 'Legend',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <LegendContainer {...props} />,
    },
];
