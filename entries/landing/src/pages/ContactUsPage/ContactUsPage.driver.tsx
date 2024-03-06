import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContactUsPage, ContactUsPageProps } from './ContactUsPage';
import { BaseComponentDriver } from 'testing-base';

export class ContactUsPageDriver extends BaseComponentDriver {
    private props: Partial<ContactUsPageProps> = {};

    constructor() {
        super('ContactUsPage');
    }

    when: any = {
        rendered: () => {
            render(<ContactUsPage {...(this.props as ContactUsPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ContactUsPage {...(this.props as ContactUsPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContactUsPageProps>) => {
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
