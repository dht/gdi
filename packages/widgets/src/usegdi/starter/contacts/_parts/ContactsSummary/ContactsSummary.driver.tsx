import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContactsSummary, ContactsSummaryProps } from './ContactsSummary';
import { BaseComponentDriver } from 'testing-base';

export class ContactsSummaryDriver extends BaseComponentDriver {
    private props: Partial<ContactsSummaryProps> = {};

    constructor() {
        super('ContactsSummary');
    }

    when: any = {
        rendered: () => {
            render(<ContactsSummary {...(this.props as ContactsSummaryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ContactsSummary {...(this.props as ContactsSummaryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContactsSummaryProps>) => {
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
