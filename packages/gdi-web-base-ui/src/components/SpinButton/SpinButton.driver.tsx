import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SpinButton, SpinButtonProps } from './SpinButton';
import { BaseComponentDriver } from 'testing-base';

export class SpinButtonDriver extends BaseComponentDriver {
    private props: Partial<SpinButtonProps> = {};

    constructor() {
        super('SpinButton');
    }

    when: any = {
        rendered: () => {
            render(<SpinButton {...(this.props as SpinButtonProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SpinButtonProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
