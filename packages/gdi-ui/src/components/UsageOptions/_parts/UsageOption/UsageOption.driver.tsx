import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UsageOption, UsageOptionProps } from './UsageOption';
import { BaseComponentDriver } from 'testing-base';

export class UsageOptionDriver extends BaseComponentDriver {
    private props: Partial<UsageOptionProps> = {};

    constructor() {
        super('UsageOption');
    }

    when: any = {
        rendered: () => {
            render(<UsageOption {...(this.props as UsageOptionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UsageOption {...(this.props as UsageOptionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UsageOptionProps>) => {
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
