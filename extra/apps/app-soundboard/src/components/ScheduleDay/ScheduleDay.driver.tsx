import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScheduleDay, ScheduleDayProps } from './ScheduleDay';
import { BaseComponentDriver } from 'testing-base';

export class ScheduleDayDriver extends BaseComponentDriver {
    private props: Partial<ScheduleDayProps> = {};

    constructor() {
        super('ScheduleDay');
    }

    when: any = {
        rendered: () => {
            render(<ScheduleDay {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ScheduleDayProps>) => {
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
