import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RetroUnix, RetroUnixProps } from './RetroUnix';
import { BaseComponentDriver } from 'testing-base';

export class RetroUnixDriver extends BaseComponentDriver {
    private props: Partial<RetroUnixProps> = {};

    constructor() {
        super('RetroUnix');
    }

    when: any = {
        rendered: () => {
            render(<RetroUnix {...(this.props as RetroUnixProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<RetroUnix {...(this.props as RetroUnixProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RetroUnixProps>) => {
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
