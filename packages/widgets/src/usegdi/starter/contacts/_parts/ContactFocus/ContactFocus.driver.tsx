import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContactFocus, ContactFocusProps } from './ContactFocus';
import { BaseComponentDriver } from 'testing-base';

export class ContactFocusDriver extends BaseComponentDriver {
    private props: Partial<ContactFocusProps> = {};

    constructor() {
        super('ContactFocus');
    }

    when: any = {
        rendered: () => {
            render(<ContactFocus {...(this.props as ContactFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ContactFocus {...(this.props as ContactFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContactFocusProps>) => {
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
