import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Calendar, CalendarProps } from './Calendar';
import { BaseComponentDriver } from 'testing-base';

export class CalendarDriver extends BaseComponentDriver {
    private props: Partial<CalendarProps> = {};

    constructor() {
        super('Calendar');
    }

    when: any = {
        rendered: () => {
            render(<Calendar {...(this.props as CalendarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
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
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
