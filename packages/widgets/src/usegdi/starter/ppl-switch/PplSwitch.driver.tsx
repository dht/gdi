import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PplSwitch, PplSwitchProps } from './PplSwitch';
import { BaseComponentDriver } from 'testing-base';

export class PplSwitchDriver extends BaseComponentDriver {
    private props: Partial<PplSwitchProps> = {};

    constructor() {
        super('PplSwitch');
    }

    when: any = {
        rendered: () => {
            render(<PplSwitch {...(this.props as PplSwitchProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PplSwitch {...(this.props as PplSwitchProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PplSwitchProps>) => {
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
