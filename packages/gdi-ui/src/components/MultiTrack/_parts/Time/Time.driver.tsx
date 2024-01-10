import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Time, TimeProps } from './Time';
import { BaseComponentDriver } from 'testing-base';

export class TimeDriver extends BaseComponentDriver {
    private props: Partial<TimeProps> = {};

    constructor() {
        super('Time');
    }

    when: any = {
        rendered: () => {
            render(<Time {...(this.props as TimeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Time {...(this.props as TimeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TimeProps>) => {
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
