import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Events, EventsProps } from './Events';
import { BaseComponentDriver } from 'testing-base';

export class EventsDriver extends BaseComponentDriver {
    private props: Partial<EventsProps> = {};

    constructor() {
        super('Events');
    }

    when: any = {
        rendered: () => {
            render(<Events {...(this.props as EventsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Events {...(this.props as EventsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<EventsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
