import React from 'react';
import { IWidget } from '@gdi/platformer';
import { MiniContainer } from '../containers/singles/MiniContainer';
import { TicketsContainer } from '../containers/TicketsContainer';
import { ProjectsContainer } from '../containers/ProjectsContainer';
import { ProjectSwitchContainer } from '../containers/ProjectSwitchContainer';

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
        component: (props: any) => <TicketsContainer />,
    },
    {
        id: TasksWidgets.Projects,
        name: 'Projects',
        description: 'Projects',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ProjectsContainer />,
    },
    {
        id: TasksWidgets.Mini,
        name: 'Mini',
        description: 'Mini',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <MiniContainer {...props} />,
    },
    {
        id: TasksWidgets.ProjectSwitch,
        name: 'ProjectSwitch',
        description: 'ProjectSwitch',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ProjectSwitchContainer />,
    },
];
