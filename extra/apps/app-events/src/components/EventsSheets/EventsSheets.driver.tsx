import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EventsSheets, EventsSheetsProps } from './EventsSheets';
import { BaseComponentDriver } from 'testing-base';

export class EventsSheetsDriver extends BaseComponentDriver {
    private props: Partial<EventsSheetsProps> = {};

    constructor() {
        super('EventsSheets');
    }

    when: any = {
        rendered: () => {
            render(<EventsSheets {...(this.props as EventsSheetsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <EventsSheets {...(this.props as EventsSheetsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<EventsSheetsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
