import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AutoForm, AutoFormProps } from './AutoForm';
import { BaseComponentDriver } from 'testing-base';

export class AutoFormDriver extends BaseComponentDriver {
    private props: Partial<AutoFormProps> = {};

    constructor() {
        super('AutoForm');
    }

    when: any = {
        rendered: () => {
            render(<AutoForm {...(this.props as AutoFormProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<AutoFormProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
