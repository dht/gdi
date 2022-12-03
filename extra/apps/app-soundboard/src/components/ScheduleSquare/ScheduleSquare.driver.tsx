import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScheduleSquare, ScheduleSquareProps } from './ScheduleSquare';
import { BaseComponentDriver } from 'testing-base';

export class ScheduleSquareDriver extends BaseComponentDriver {
    private props: Partial<ScheduleSquareProps> = {};

    constructor() {
        super('ScheduleSquare');
    }

    when: any = {
        rendered: () => {
            render(<ScheduleSquare {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ScheduleSquareProps>) => {
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
