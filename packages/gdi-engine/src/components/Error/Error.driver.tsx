import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Error, ErrorProps } from './Error';
import { BaseComponentDriver } from 'testing-base';

export class ErrorDriver extends BaseComponentDriver {
    private props: Partial<ErrorProps> = {};

    constructor() {
        super('Error');
    }

    when: any = {
        rendered: () => {
            render(<Error {...(this.props as ErrorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Error {...(this.props as ErrorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ErrorProps>) => {
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
