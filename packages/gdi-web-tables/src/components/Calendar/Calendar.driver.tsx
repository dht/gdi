import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Calendar, CalendarProps } from './Calendar';
import { BaseComponentDriver } from 'testing-base';

export class CalendarDriver extends BaseComponentDriver {
    private props: Partial<CalendarProps> = {
    };

    constructor() {
        super('Calendar');
    }

    when: any = {
        rendered: () => {
            render(<Calendar {...(this.props as CalendarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Calendar {...(this.props as CalendarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CalendarProps>) => {
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
