import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { ContactUs, ContactUsProps } from './ContactUs';
import { BaseComponentDriver } from 'testing-base';

export class ContactUsDriver extends BaseComponentDriver {
    private props: Partial<ContactUsProps> = {};

    constructor() {
        super('ContactUs');
    }

    when: any = {
        rendered: () => {
            render(<ContactUs {...(this.props as ContactUsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ContactUs {...(this.props as ContactUsProps)} />
            );
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
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
