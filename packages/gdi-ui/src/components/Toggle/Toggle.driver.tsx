import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Toggle, ToggleProps } from './Toggle';
import { BaseComponentDriver } from 'testing-base';

export class ToggleDriver extends BaseComponentDriver {
    private props: Partial<ToggleProps> = {};

    constructor() {
        super('Toggle');
    }

    when: any = {
        rendered: () => {
            render(<Toggle {...(this.props as ToggleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Toggle {...(this.props as ToggleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ToggleProps>) => {
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
