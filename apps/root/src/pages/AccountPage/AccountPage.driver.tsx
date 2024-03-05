import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AccountPage, AccountPageProps } from './AccountPage';
import { BaseComponentDriver } from 'testing-base';

export class AccountPageDriver extends BaseComponentDriver {
    private props: Partial<AccountPageProps> = {};

    constructor() {
        super('AccountPage');
    }

    when: any = {
        rendered: () => {
            render(<AccountPage {...(this.props as AccountPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AccountPage {...(this.props as AccountPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AccountPageProps>) => {
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
