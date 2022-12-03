import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UnoButton, UnoButtonProps } from './UnoButton';
import { BaseComponentDriver } from 'testing-base';

export class UnoButtonDriver extends BaseComponentDriver {
    private props: Partial<UnoButtonProps> = {};

    constructor() {
        super('UnoButton');
    }

    when: any = {
        rendered: () => {
            render(<UnoButton {...(this.props as UnoButtonProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <UnoButton {...(this.props as UnoButtonProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<UnoButtonProps>) => {
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
