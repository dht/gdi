import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Spinner, SpinnerProps } from './Spinner';
import { BaseComponentDriver } from 'testing-base';

export class SpinnerDriver extends BaseComponentDriver {
    private props: Partial<SpinnerProps> = {};

    constructor() {
        super('Spinner');
    }

    when: any = {
        rendered: () => {
            render(<Spinner {...(this.props as SpinnerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Spinner {...(this.props as SpinnerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SpinnerProps>) => {
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
