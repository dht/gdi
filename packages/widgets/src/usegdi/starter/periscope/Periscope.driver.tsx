import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Periscope, PeriscopeProps } from './Periscope';
import { BaseComponentDriver } from 'testing-base';

export class PeriscopeDriver extends BaseComponentDriver {
    private props: Partial<PeriscopeProps> = {};

    constructor() {
        super('Periscope');
    }

    when: any = {
        rendered: () => {
            render(<Periscope {...(this.props as PeriscopeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Periscope {...(this.props as PeriscopeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PeriscopeProps>) => {
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
