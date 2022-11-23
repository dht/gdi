import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContactUs, ContactUsProps } from './ContactUs';
import { BaseComponentDriver } from 'testing-base';

export class ContactUsDriver extends BaseComponentDriver {
    private props: Partial<ContactUsProps> = {
    };

    constructor() {
        super('ContactUs');
    }

    when: any = {
        rendered: () => {
            render(<ContactUs {...(this.props as ContactUsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ContactUs {...(this.props as ContactUsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContactUsProps>) => {
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
