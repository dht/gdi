import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Timestamps, TimestampsProps } from './Timestamps';
import { BaseComponentDriver } from 'testing-base';

export class TimestampsDriver extends BaseComponentDriver {
    private props: Partial<TimestampsProps> = {};

    constructor() {
        super('Timestamps');
    }

    when: any = {
        rendered: () => {
            render(<Timestamps {...(this.props as TimestampsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Timestamps {...(this.props as TimestampsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TimestampsProps>) => {
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
