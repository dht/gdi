import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Snoozer, SnoozerProps } from './Snoozer';
import { BaseComponentDriver } from 'testing-base';

export class SnoozerDriver extends BaseComponentDriver {
    private props: Partial<SnoozerProps> = {};

    constructor() {
        super('Snoozer');
    }

    when: any = {
        rendered: () => {
            render(<Snoozer {...(this.props as SnoozerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Snoozer {...(this.props as SnoozerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SnoozerProps>) => {
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
