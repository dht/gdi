import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalendarWeek, CalendarWeekProps } from './CalendarWeek';
import { BaseComponentDriver } from 'testing-base';

export class CalendarWeekDriver extends BaseComponentDriver {
    private props: Partial<CalendarWeekProps> = {};

    constructor() {
        super('CalendarWeek');
    }

    when: any = {
        rendered: () => {
            render(<CalendarWeek {...(this.props as CalendarWeekProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CalendarWeek {...(this.props as CalendarWeekProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CalendarWeekProps>) => {
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
