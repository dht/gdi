import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Switcher, SwitcherProps } from './Switcher';
import { BaseComponentDriver } from 'testing-base';

export class SwitcherDriver extends BaseComponentDriver {
    private props: Partial<SwitcherProps> = {};

    constructor() {
        super('Switcher');
    }

    when: any = {
        rendered: () => {
            render(<Switcher {...(this.props as SwitcherProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Switcher {...(this.props as SwitcherProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SwitcherProps>) => {
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
