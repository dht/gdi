import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Console, ConsoleProps } from './Console';
import { BaseComponentDriver } from 'testing-base';

export class ConsoleDriver extends BaseComponentDriver {
    private props: Partial<ConsoleProps> = {};

    constructor() {
        super('Console');
    }

    when: any = {
        rendered: () => {
            render(<Console {...(this.props as ConsoleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Console {...(this.props as ConsoleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ConsoleProps>) => {
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
