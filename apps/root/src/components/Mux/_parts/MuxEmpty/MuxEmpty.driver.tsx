import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxEmpty, MuxEmptyProps } from './MuxEmpty';
import { BaseComponentDriver } from 'testing-base';

export class MuxEmptyDriver extends BaseComponentDriver {
    private props: Partial<MuxEmptyProps> = {};

    constructor() {
        super('MuxEmpty');
    }

    when: any = {
        rendered: () => {
            render(<MuxEmpty {...(this.props as MuxEmptyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxEmpty {...(this.props as MuxEmptyProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxEmptyProps>) => {
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
