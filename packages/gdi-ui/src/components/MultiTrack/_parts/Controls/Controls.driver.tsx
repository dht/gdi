import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Controls, ControlsProps } from './Controls';
import { BaseComponentDriver } from 'testing-base';

export class ControlsDriver extends BaseComponentDriver {
    private props: Partial<ControlsProps> = {};

    constructor() {
        super('Controls');
    }

    when: any = {
        rendered: () => {
            render(<Controls {...(this.props as ControlsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Controls {...(this.props as ControlsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ControlsProps>) => {
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
