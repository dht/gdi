import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const ProjectsTableContainer = React.lazy(() => import('../containers/ProjectsTableContainer')); // prettier-ignore
const SoundboardTopContainer = React.lazy(() => import('../containers/SoundboardTopContainer')); // prettier-ignore
const ScheduleTopContainer = React.lazy(() => import('../containers/ScheduleTopContainer')); // prettier-ignore
const SquaresContainer = React.lazy(() => import('../containers/SquaresContainer')); // prettier-ignore
const ScheduleTableContainer = React.lazy(() => import('../containers/ScheduleTableContainer')); // prettier-ignore
const SwitcherContainer = React.lazy(() => import('../containers/SwitcherContainer')); // prettier-ignore
const ScheduleCommandBarContainer = React.lazy(() => import('../containers/ScheduleCommandBarContainer')); // prettier-ignore
const ScheduleClockContainer = React.lazy(() => import('../containers/ScheduleClockContainer')); // prettier-ignore
const SimsContainer = React.lazy(() => import('../containers/SimsContainer')); // prettier-ignore
const MiniContainer = React.lazy(() => import('../containers/MiniContainer')); // prettier-ignore
const ScheduleClock2Container = React.lazy(() => import('../containers/ScheduleClock2Container')); // prettier-ignore

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
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={SquaresContainer}
                props={props}
            />
        ),
    },
    {
        id: SoundboardWidgets.SoundboardTop,
        name: 'SoundboardTop',
        description: 'SoundboardTop',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={SoundboardTopContainer}
                props={props}
            />
        ),
    },
    {
        id: SoundboardWidgets.ScheduleTop,
        name: 'ScheduleTop',
        description: 'ScheduleTop',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ScheduleTopContainer}
                props={props}
            />
        ),
    },
    {
        id: SoundboardWidgets.ProjectsTable,
        name: 'ProjectsTable',
        description: 'ProjectsTable',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ProjectsTableContainer}
                props={props}
            />
        ),
    },
    {
        id: SoundboardWidgets.ScheduleTable,
        name: 'ScheduleTable',
        description: 'ScheduleTable',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ScheduleTableContainer}
                props={props}
            />
        ),
    },
    {
        id: SoundboardWidgets.ScheduleCommandBar,
        name: 'ScheduleCommandBar',
        description: 'ScheduleCommandBar',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ScheduleCommandBarContainer}
                props={props}
            />
        ),
    },
    {
        id: SoundboardWidgets.Switcher,
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
        id: SoundboardWidgets.ScheduleClock,
        name: 'ScheduleClock',
        description: 'ScheduleClock',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ScheduleClockContainer}
                props={props}
            />
        ),
    },
    {
        id: SoundboardWidgets.ScheduleClock2,
        name: 'ScheduleClock2',
        description: 'ScheduleClock2',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ScheduleClock2Container}
                props={props}
            />
        ),
    },
    {
        id: SoundboardWidgets.Sims,
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
        id: SoundboardWidgets.Mini,
        name: 'Mini',
        description: 'Mini',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={MiniContainer} props={props} />
        ),
    },
];
