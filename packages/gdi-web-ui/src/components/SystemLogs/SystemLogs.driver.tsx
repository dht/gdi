import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SystemLogs, SystemLogsProps } from './SystemLogs';
import { BaseComponentDriver } from 'testing-base';

export class SystemLogsDriver extends BaseComponentDriver {
    private props: Partial<SystemLogsProps> = {
    };

    constructor() {
        super('SystemLogs');
    }

    when: any = {
        rendered: () => {
            render(<SystemLogs {...(this.props as SystemLogsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SystemLogs {...(this.props as SystemLogsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SystemLogsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
