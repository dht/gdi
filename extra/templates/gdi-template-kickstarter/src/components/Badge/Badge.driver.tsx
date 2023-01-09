import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Badge, BadgeProps } from './Badge';
import { BaseComponentDriver } from 'testing-base';

export class BadgeDriver extends BaseComponentDriver {
    private props: Partial<BadgeProps> = {};

    constructor() {
        super('Badge');
    }

    when: any = {
        rendered: () => {
            render(<Badge {...(this.props as BadgeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Badge {...(this.props as BadgeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BadgeProps>) => {
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
