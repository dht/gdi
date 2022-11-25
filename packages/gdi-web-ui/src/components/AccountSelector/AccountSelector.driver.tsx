import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AccountSelector, AccountSelectorProps } from './AccountSelector';
import { BaseComponentDriver } from 'testing-base';

export class AccountSelectorDriver extends BaseComponentDriver {
    private props: Partial<AccountSelectorProps> = {
    };

    constructor() {
        super('AccountSelector');
    }

    when: any = {
        rendered: () => {
            render(<AccountSelector {...(this.props as AccountSelectorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AccountSelector {...(this.props as AccountSelectorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AccountSelectorProps>) => {
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
