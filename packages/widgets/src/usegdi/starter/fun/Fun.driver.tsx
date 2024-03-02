import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Fun, FunProps } from './Fun';
import { BaseComponentDriver } from 'testing-base';

export class FunDriver extends BaseComponentDriver {
    private props: Partial<FunProps> = {};

    constructor() {
        super('Fun');
    }

    when: any = {
        rendered: () => {
            render(<Fun {...(this.props as FunProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Fun {...(this.props as FunProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FunProps>) => {
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
