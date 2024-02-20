import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Mux, MuxProps } from './Mux';
import { BaseComponentDriver } from 'testing-base';

export class MuxDriver extends BaseComponentDriver {
    private props: Partial<MuxProps> = {};

    constructor() {
        super('Mux');
    }

    when: any = {
        rendered: () => {
            render(<Mux {...(this.props as MuxProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Mux {...(this.props as MuxProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxProps>) => {
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
