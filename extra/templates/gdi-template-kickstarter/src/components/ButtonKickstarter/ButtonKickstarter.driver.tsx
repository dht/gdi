import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ButtonKickstarter, ButtonKickstarterProps } from './ButtonKickstarter';
import { BaseComponentDriver } from 'testing-base';

export class ButtonKickstarterDriver extends BaseComponentDriver {
    private props: Partial<ButtonKickstarterProps> = {};

    constructor() {
        super('ButtonKickstarter');
    }

    when: any = {
        rendered: () => {
            render(<ButtonKickstarter {...(this.props as ButtonKickstarterProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ButtonKickstarter {...(this.props as ButtonKickstarterProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ButtonKickstarterProps>) => {
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
