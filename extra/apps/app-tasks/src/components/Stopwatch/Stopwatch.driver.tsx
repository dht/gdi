import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Stopwatch, StopwatchProps } from './Stopwatch';
import { BaseComponentDriver } from 'testing-base';

export class StopwatchDriver extends BaseComponentDriver {
    private props: Partial<StopwatchProps> = {};

    constructor() {
        super('Stopwatch');
    }

    when: any = {
        rendered: () => {
            render(<Stopwatch {...(this.props as StopwatchProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<StopwatchProps>) => {
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
