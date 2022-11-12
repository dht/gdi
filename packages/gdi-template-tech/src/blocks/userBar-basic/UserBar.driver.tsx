import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UserBar, UserBarProps } from './UserBar';
import { BaseComponentDriver } from 'testing-base';

export class UserBarDriver extends BaseComponentDriver {
    private props: Partial<UserBarProps> = {
    };

    constructor() {
        super('UserBar');
    }

    when: any = {
        rendered: () => {
            render(<UserBar {...(this.props as UserBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UserBar {...(this.props as UserBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UserBarProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
