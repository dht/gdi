import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Contacts, ContactsProps } from './Contacts';
import { BaseComponentDriver } from 'testing-base';

export class ContactsDriver extends BaseComponentDriver {
    private props: Partial<ContactsProps> = {};

    constructor() {
        super('Contacts');
    }

    when: any = {
        rendered: () => {
            render(<Contacts {...(this.props as ContactsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Contacts {...(this.props as ContactsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContactsProps>) => {
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
