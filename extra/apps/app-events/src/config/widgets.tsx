import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { RemindersContainer } from '../containers/RemindersContainer';
import { EventsContainer } from '../containers/EventsContainer';
import { APP_ID } from './ids';

export enum EventsWidgets {
    Events = 'events.Events',
    Reminders = 'events.Reminders',
}
export const widgets: IWidget[] = [
    {
        id: EventsWidgets.Events,
        name: 'Events',
        description: 'Events',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={EventsContainer} props={props} />
        ),
    },
    {
        id: EventsWidgets.Reminders,
        name: 'Reminders',
        description: 'Reminders',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={RemindersContainer}
                props={props}
            />
        ),
    },
];
