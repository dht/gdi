import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Account, AccountProps } from './Account';
import { BaseComponentDriver } from 'testing-base';

export class AccountDriver extends BaseComponentDriver {
    private props: Partial<AccountProps> = {
    };

    constructor() {
        super('Account');
    }

    when: any = {
        rendered: () => {
            render(<Account {...(this.props as AccountProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Account {...(this.props as AccountProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AccountProps>) => {
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
