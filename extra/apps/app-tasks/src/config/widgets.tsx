import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';

import { APP_ID } from './ids';

const MiniContainer = React.lazy(() => import('../containers/singles/MiniContainer')); // prettier-ignore
const TicketsContainer = React.lazy(() => import('../containers/TicketsContainer')); // prettier-ignore
const ProjectsContainer = React.lazy(() => import('../containers/ProjectsContainer')); // prettier-ignore
const ProjectSwitchContainer = React.lazy(() => import('../containers/ProjectSwitchContainer')); // prettier-ignore

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
