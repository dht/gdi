import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AccountTag, AccountTagProps } from './AccountTag';
import { BaseComponentDriver } from 'testing-base';

export class AccountTagDriver extends BaseComponentDriver {
    private props: Partial<AccountTagProps> = {};

    constructor() {
        super('AccountTag');
    }

    when: any = {
        rendered: () => {
            render(<AccountTag {...(this.props as AccountTagProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <AccountTag {...(this.props as AccountTagProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<AccountTagProps>) => {
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
