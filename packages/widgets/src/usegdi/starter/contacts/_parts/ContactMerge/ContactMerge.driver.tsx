import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContactMerge, ContactMergeProps } from './ContactMerge';
import { BaseComponentDriver } from 'testing-base';

export class ContactMergeDriver extends BaseComponentDriver {
    private props: Partial<ContactMergeProps> = {};

    constructor() {
        super('ContactMerge');
    }

    when: any = {
        rendered: () => {
            render(<ContactMerge {...(this.props as ContactMergeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ContactMerge {...(this.props as ContactMergeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContactMergeProps>) => {
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
