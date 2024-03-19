import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EventFocus, EventFocusProps } from './EventFocus';
import { BaseComponentDriver } from 'testing-base';

export class EventFocusDriver extends BaseComponentDriver {
    private props: Partial<EventFocusProps> = {};

    constructor() {
        super('EventFocus');
    }

    when: any = {
        rendered: () => {
            render(<EventFocus {...(this.props as EventFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<EventFocus {...(this.props as EventFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<EventFocusProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
