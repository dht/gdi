import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScheduleTable, ScheduleTableProps } from './ScheduleTable';
import { BaseComponentDriver } from 'testing-base';

export class ScheduleTableDriver extends BaseComponentDriver {
    private props: Partial<ScheduleTableProps> = {};

    constructor() {
        super('ScheduleTable');
    }

    when: any = {
        rendered: () => {
            render(<ScheduleTable {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ScheduleTableProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
