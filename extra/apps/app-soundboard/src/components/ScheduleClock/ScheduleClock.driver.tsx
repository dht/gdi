import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScheduleClock, ScheduleClockProps } from './ScheduleClock';
import { BaseComponentDriver } from 'testing-base';

export class ScheduleClockDriver extends BaseComponentDriver {
    private props: Partial<ScheduleClockProps> = {};

    constructor() {
        super('ScheduleClock');
    }

    when: any = {
        rendered: () => {
            render(<ScheduleClock {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ScheduleClockProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
