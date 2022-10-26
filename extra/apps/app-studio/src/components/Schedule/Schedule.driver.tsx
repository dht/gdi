import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Schedule, ScheduleProps } from './Schedule';
import { BaseComponentDriver } from 'testing-base';

export class ScheduleDriver extends BaseComponentDriver {
    private props: Partial<ScheduleProps> = {};

    constructor() {
        super('Schedule');
    }

    when: any = {
        rendered: () => {
            render(<Schedule {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ScheduleProps>) => {
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
