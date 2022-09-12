import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DateInput, DateProps } from './DateInput';
import { BaseComponentDriver } from 'testing-base';

export class DateDriver extends BaseComponentDriver {
    private props: Partial<DateProps> = {};

    constructor() {
        super('Date');
    }

    when: any = {
        rendered: () => {
            render(<DateInput {...(this.props as DateProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<DateProps>) => {
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
