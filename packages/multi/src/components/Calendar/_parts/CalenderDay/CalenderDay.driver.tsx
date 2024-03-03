import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalenderDay, CalenderDayProps } from './CalenderDay';
import { BaseComponentDriver } from 'testing-base';

export class CalenderDayDriver extends BaseComponentDriver {
    private props: Partial<CalenderDayProps> = {};

    constructor() {
        super('CalenderDay');
    }

    when: any = {
        rendered: () => {
            render(<CalenderDay {...(this.props as CalenderDayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CalenderDay {...(this.props as CalenderDayProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CalenderDayProps>) => {
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
