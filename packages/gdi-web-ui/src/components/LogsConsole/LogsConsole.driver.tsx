import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogsConsole, LogsConsoleProps } from './LogsConsole';
import { BaseComponentDriver } from 'testing-base';

export class LogsConsoleDriver extends BaseComponentDriver {
    private props: Partial<LogsConsoleProps> = {
    };

    constructor() {
        super('LogsConsole');
    }

    when: any = {
        rendered: () => {
            render(<LogsConsole {...(this.props as LogsConsoleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LogsConsole {...(this.props as LogsConsoleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LogsConsoleProps>) => {
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
