import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PovSwitcher, PovSwitcherProps } from './PovSwitcher';
import { BaseComponentDriver } from 'testing-base';

export class PovSwitcherDriver extends BaseComponentDriver {
    private props: Partial<PovSwitcherProps> = {};

    constructor() {
        super('PovSwitcher');
    }

    when: any = {
        rendered: () => {
            render(<PovSwitcher {...(this.props as PovSwitcherProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PovSwitcher {...(this.props as PovSwitcherProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PovSwitcherProps>) => {
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
