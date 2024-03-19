import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalendarFocus, CalendarFocusProps } from './CalendarFocus';
import { BaseComponentDriver } from 'testing-base';

export class CalendarFocusDriver extends BaseComponentDriver {
    private props: Partial<CalendarFocusProps> = {};

    constructor() {
        super('CalendarFocus');
    }

    when: any = {
        rendered: () => {
            render(<CalendarFocus {...(this.props as CalendarFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CalendarFocus {...(this.props as CalendarFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CalendarFocusProps>) => {
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
