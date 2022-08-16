import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PhoneInput, PhoneInputProps } from './PhoneInput';
import { BaseComponentDriver } from 'testing-base';

export class PhoneInputDriver extends BaseComponentDriver {
    private props: Partial<PhoneInputProps> = {};

    constructor() {
        super('PhoneInput');
    }

    when: any = {
        rendered: () => {
            render(<PhoneInput {...(this.props as PhoneInputProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<PhoneInputProps>) => {
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
