import React from 'react';
import { IWidget } from '@gdi/platformer';
import { EventsSheetsContainer } from '../containers/EventsSheetsContainer';
import { EventsContainer } from '../containers/EventsContainer';

export enum EventsWidgets {
    Events = 'events.Events',
    Sheets = 'events.Sheets',
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
        id: EventsWidgets.Sheets,
        name: 'Events',
        description: 'Events',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <EventsSheetsContainer {...props} />,
    },
];
