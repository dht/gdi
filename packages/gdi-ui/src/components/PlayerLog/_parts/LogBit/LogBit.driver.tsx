import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogBit, LogBitProps } from './LogBit';
import { BaseComponentDriver } from 'testing-base';

export class LogBitDriver extends BaseComponentDriver {
    private props: Partial<LogBitProps> = {};

    constructor() {
        super('LogBit');
    }

    when: any = {
        rendered: () => {
            render(<LogBit {...(this.props as LogBitProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LogBit {...(this.props as LogBitProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LogBitProps>) => {
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
