import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DevLogs, DevLogsProps } from './DevLogs';
import { BaseComponentDriver } from 'testing-base';

export class DevLogsDriver extends BaseComponentDriver {
    private props: Partial<DevLogsProps> = {};

    constructor() {
        super('DevLogs');
    }

    when: any = {
        rendered: () => {
            render(<DevLogs {...(this.props as DevLogsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DevLogs {...(this.props as DevLogsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DevLogsProps>) => {
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
