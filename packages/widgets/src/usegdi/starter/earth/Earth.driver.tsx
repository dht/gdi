import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Earth, EarthProps } from './Earth';
import { BaseComponentDriver } from 'testing-base';

export class EarthDriver extends BaseComponentDriver {
    private props: Partial<EarthProps> = {};

    constructor() {
        super('Earth');
    }

    when: any = {
        rendered: () => {
            render(<Earth {...(this.props as EarthProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Earth {...(this.props as EarthProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<EarthProps>) => {
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
