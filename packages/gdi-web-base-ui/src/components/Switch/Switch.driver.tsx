import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Switch, SwitchProps } from './Switch';
import { BaseComponentDriver } from 'testing-base';

export class SwitchDriver extends BaseComponentDriver {
    private props: Partial<SwitchProps> = {};

    constructor() {
        super('Switch');
    }

    when: any = {
        rendered: () => {
            render(<Switch {...(this.props as SwitchProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Switch {...(this.props as SwitchProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SwitchProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
