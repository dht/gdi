import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogsLifecycle, LogsLifecycleProps } from './LogsLifecycle';
import { BaseComponentDriver } from 'testing-base';

export class LogsLifecycleDriver extends BaseComponentDriver {
    private props: Partial<LogsLifecycleProps> = {};

    constructor() {
        super('LogsLifecycle');
    }

    when: any = {
        rendered: () => {
            render(<LogsLifecycle {...(this.props as LogsLifecycleProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<LogsLifecycleProps>) => {
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
