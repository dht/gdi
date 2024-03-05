import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UsageOptions, UsageOptionsProps } from './UsageOptions';
import { BaseComponentDriver } from 'testing-base';

export class UsageOptionsDriver extends BaseComponentDriver {
    private props: Partial<UsageOptionsProps> = {};

    constructor() {
        super('UsageOptions');
    }

    when: any = {
        rendered: () => {
            render(<UsageOptions {...(this.props as UsageOptionsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UsageOptions {...(this.props as UsageOptionsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UsageOptionsProps>) => {
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
