import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalendarMonth, CalendarMonthProps } from './CalendarMonth';
import { BaseComponentDriver } from 'testing-base';

export class CalendarMonthDriver extends BaseComponentDriver {
    private props: Partial<CalendarMonthProps> = {};

    constructor() {
        super('CalendarMonth');
    }

    when: any = {
        rendered: () => {
            render(<CalendarMonth {...(this.props as CalendarMonthProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CalendarMonth {...(this.props as CalendarMonthProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CalendarMonthProps>) => {
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
