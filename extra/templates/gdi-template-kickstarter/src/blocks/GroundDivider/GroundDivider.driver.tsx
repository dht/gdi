import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GroundDivider, GroundDividerProps } from './GroundDivider';
import { BaseComponentDriver } from 'testing-base';

export class GroundDividerDriver extends BaseComponentDriver {
    private props: Partial<GroundDividerProps> = {};

    constructor() {
        super('GroundDivider');
    }

    when: any = {
        rendered: () => {
            render(<GroundDivider {...(this.props as GroundDividerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GroundDivider {...(this.props as GroundDividerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GroundDividerProps>) => {
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
