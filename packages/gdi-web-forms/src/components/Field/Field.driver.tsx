import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Field, FieldProps } from './Field';
import { BaseComponentDriver } from 'testing-base';

export class FieldDriver extends BaseComponentDriver {
    private props: Partial<FieldProps> = {};

    constructor() {
        super('Field');
    }

    when: any = {
        rendered: () => {
            render(<Field {...(this.props as FieldProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<FieldProps>) => {
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
