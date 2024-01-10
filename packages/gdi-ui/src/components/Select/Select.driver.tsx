import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select, SelectProps } from './Select';
import { BaseComponentDriver } from 'testing-base';

export class SelectDriver extends BaseComponentDriver {
    private props: Partial<SelectProps> = {};

    constructor() {
        super('Select');
    }

    when: any = {
        rendered: () => {
            render(<Select {...(this.props as SelectProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Select {...(this.props as SelectProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SelectProps>) => {
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
