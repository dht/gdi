import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogVector, LogVectorProps } from './LogVector';
import { BaseComponentDriver } from 'testing-base';

export class LogVectorDriver extends BaseComponentDriver {
    private props: Partial<LogVectorProps> = {};

    constructor() {
        super('LogVector');
    }

    when: any = {
        rendered: () => {
            render(<LogVector {...(this.props as LogVectorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LogVector {...(this.props as LogVectorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LogVectorProps>) => {
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
