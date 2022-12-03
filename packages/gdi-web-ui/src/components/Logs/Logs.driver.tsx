import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Logs, LogsProps } from './Logs';
import { BaseComponentDriver } from 'testing-base';

export class LogsDriver extends BaseComponentDriver {
    private props: Partial<LogsProps> = {};

    constructor() {
        super('Logs');
    }

    when: any = {
        rendered: () => {
            render(<Logs {...(this.props as LogsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Logs {...(this.props as LogsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LogsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
