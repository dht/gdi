import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ExpressDebugger, ExpressDebuggerProps } from './ExpressDebugger';
import { BaseComponentDriver } from 'testing-base';

export class ExpressDebuggerDriver extends BaseComponentDriver {
    private props: Partial<ExpressDebuggerProps> = {};

    constructor() {
        super('ExpressDebugger');
    }

    when: any = {
        rendered: () => {
            render(<ExpressDebugger {...(this.props as ExpressDebuggerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ExpressDebugger {...(this.props as ExpressDebuggerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ExpressDebuggerProps>) => {
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
