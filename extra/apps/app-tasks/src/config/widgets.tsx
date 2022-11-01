import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { MiniContainer } from '../containers/singles/MiniContainer';
import { TicketsContainer } from '../containers/TicketsContainer';
import { ProjectsContainer } from '../containers/ProjectsContainer';
import { ProjectSwitchContainer } from '../containers/ProjectSwitchContainer';
import { APP_ID } from './ids';

export enum TasksWidgets {
    Tickets = 'tasks.Tickets',
    Projects = 'tasks.Projects',
    Mini = 'tasks.Mini',
    ProjectSwitch = 'tasks.ProjectSwitch',
}

export const widgets: IWidget[] = [
    {
        id: TasksWidgets.Tickets,
        name: 'Tickets',
        description: 'Tickets',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={TicketsContainer}
                props={props}
            />
        ),
    },
    {
        id: TasksWidgets.Projects,
        name: 'Projects',
        description: 'Projects',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ProjectsContainer}
                props={props}
            />
        ),
    },
    {
        id: TasksWidgets.Mini,
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
    {
        id: TasksWidgets.ProjectSwitch,
        name: 'ProjectSwitch',
        description: 'ProjectSwitch',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ProjectSwitchContainer}
                props={props}
            />
        ),
    },
];
