import React from 'react';
import { IWidget } from '@gdi/platformer';
import { ProjectsTableContainer } from '../containers/ProjectsTableContainer';
import { SoundboardTopContainer } from '../containers/SoundboardTopContainer';
import { ScheduleTopContainer } from '../containers/ScheduleTopContainer';
import { SquaresContainer } from '../containers/SquaresContainer';
import { ScheduleTableContainer } from '../containers/ScheduleTableContainer';
import { SwitcherContainer } from '../containers/SwitcherContainer';
import { ScheduleCommandBarContainer } from '../containers/ScheduleCommandBarContainer';
import { ScheduleClockContainer } from '../containers/ScheduleClockContainer';
import { SimsContainer } from '../containers/SimsContainer';
import { MiniContainer } from '../containers/MiniContainer';
import { ScheduleClock2Container } from '../containers/ScheduleClock2Container';

export enum SoundboardWidgets {
    Squares = 'soundboard.Squares',
    SoundboardTop = 'soundboard.SoundboardTop',
    ProjectsTable = 'soundboard.ProjectsTable',
    ScheduleTop = 'soundboard.ScheduleTop',
    ScheduleTable = 'soundboard.ScheduleTable',
    Switcher = 'soundboard.Switcher',
    ScheduleClock = 'soundboard.ScheduleClock',
    ScheduleClock2 = 'soundboard.ScheduleClock2',
    ScheduleCommandBar = 'soundboard.ScheduleCommandBar',
    Sims = 'soundboard.Sims',
    Mini = 'soundboard.Mini',
}
export const widgets: IWidget[] = [
    {
        id: SoundboardWidgets.Squares,
        name: 'Squares',
        description: 'Squares',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SquaresContainer {...props} />,
    },
    {
        id: SoundboardWidgets.SoundboardTop,
        name: 'SoundboardTop',
        description: 'SoundboardTop',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SoundboardTopContainer {...props} />,
    },
    {
        id: SoundboardWidgets.ScheduleTop,
        name: 'ScheduleTop',
        description: 'ScheduleTop',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ScheduleTopContainer {...props} />,
    },
    {
        id: SoundboardWidgets.ProjectsTable,
        name: 'ProjectsTable',
        description: 'ProjectsTable',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ProjectsTableContainer {...props} />,
    },
    {
        id: SoundboardWidgets.ScheduleTable,
        name: 'ScheduleTable',
        description: 'ScheduleTable',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ScheduleTableContainer {...props} />,
    },
    {
        id: SoundboardWidgets.ScheduleCommandBar,
        name: 'ScheduleCommandBar',
        description: 'ScheduleCommandBar',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ScheduleCommandBarContainer {...props} />,
    },
    {
        id: SoundboardWidgets.Switcher,
        name: 'Switcher',
        description: 'Switcher',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SwitcherContainer {...props} />,
    },
    {
        id: SoundboardWidgets.ScheduleClock,
        name: 'ScheduleClock',
        description: 'ScheduleClock',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ScheduleClockContainer {...props} />,
    },
    {
        id: SoundboardWidgets.ScheduleClock2,
        name: 'ScheduleClock2',
        description: 'ScheduleClock2',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ScheduleClock2Container {...props} />,
    },
    {
        id: SoundboardWidgets.Sims,
        name: 'Sims',
        description: 'Sims',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SimsContainer {...props} />,
    },
    {
        id: SoundboardWidgets.Mini,
        name: 'Mini',
        description: 'Mini',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <MiniContainer {...props} />,
    },
];
