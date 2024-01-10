import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalendarHeader, CalendarHeaderProps } from './CalendarHeader';
import { BaseComponentDriver } from 'testing-base';

export class CalendarHeaderDriver extends BaseComponentDriver {
    private props: Partial<CalendarHeaderProps> = {};

    constructor() {
        super('CalendarHeader');
    }

    when: any = {
        rendered: () => {
            render(<CalendarHeader {...(this.props as CalendarHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CalendarHeader {...(this.props as CalendarHeaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CalendarHeaderProps>) => {
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
