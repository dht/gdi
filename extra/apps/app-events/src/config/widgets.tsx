import React from 'react';
import { IWidget } from '@gdi/platformer';
import { RemindersContainer } from '../containers/RemindersContainer';
import { EventsContainer } from '../containers/EventsContainer';

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
        component: (props: any) => <EventsContainer {...props} />,
    },
    {
        id: EventsWidgets.Reminders,
        name: 'Reminders',
        description: 'Reminders',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <RemindersContainer {...props} />,
    },
];
