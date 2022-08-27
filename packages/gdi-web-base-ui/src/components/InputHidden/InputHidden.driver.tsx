import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputHidden, InputHiddenProps } from './InputHidden';
import { BaseComponentDriver } from 'testing-base';

export class InputHiddenDriver extends BaseComponentDriver {
    private props: Partial<InputHiddenProps> = {
    };

    constructor() {
        super('InputHidden');
    }

    when: any = {
        rendered: () => {
            render(<InputHidden {...(this.props as InputHiddenProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<InputHidden {...(this.props as InputHiddenProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<InputHiddenProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
