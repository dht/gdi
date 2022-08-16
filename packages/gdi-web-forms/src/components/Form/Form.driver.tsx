import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Form, FormProps } from './Form';
import { BaseComponentDriver } from 'testing-base';

export class FormDriver extends BaseComponentDriver {
    private props: Partial<FormProps> = {};

    constructor() {
        super('Form');
    }

    when: any = {
        rendered: () => {
            render(<Form {...(this.props as FormProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<FormProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
