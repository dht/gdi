import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogsSystem, LogsSystemProps } from './LogsSystem';
import { BaseComponentDriver } from 'testing-base';

export class LogsSystemDriver extends BaseComponentDriver {
    private props: Partial<LogsSystemProps> = {};

    constructor() {
        super('LogsSystem');
    }

    when: any = {
        rendered: () => {
            render(<LogsSystem {...(this.props as LogsSystemProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <LogsSystem {...(this.props as LogsSystemProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<LogsSystemProps>) => {
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
