import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ConsoleLogs, ConsoleLogsProps } from './ConsoleLogs';
import { BaseComponentDriver } from 'testing-base';

export class ConsoleLogsDriver extends BaseComponentDriver {
    private props: Partial<ConsoleLogsProps> = {
    };

    constructor() {
        super('ConsoleLogs');
    }

    when: any = {
        rendered: () => {
            render(<ConsoleLogs {...(this.props as ConsoleLogsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ConsoleLogs {...(this.props as ConsoleLogsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ConsoleLogsProps>) => {
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
