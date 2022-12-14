import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Clock, ClockProps } from './Clock';
import { BaseComponentDriver } from 'testing-base';

export class ClockDriver extends BaseComponentDriver {
    private props: Partial<ClockProps> = {};

    constructor() {
        super('Clock');
    }

    when: any = {
        rendered: () => {
            render(<Clock {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ClockProps>) => {
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
