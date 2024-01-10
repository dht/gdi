import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogElementInfo, LogElementInfoProps } from './LogElementInfo';
import { BaseComponentDriver } from 'testing-base';

export class LogElementInfoDriver extends BaseComponentDriver {
    private props: Partial<LogElementInfoProps> = {};

    constructor() {
        super('LogElementInfo');
    }

    when: any = {
        rendered: () => {
            render(<LogElementInfo {...(this.props as LogElementInfoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LogElementInfo {...(this.props as LogElementInfoProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LogElementInfoProps>) => {
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
