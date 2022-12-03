import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Uno, UnoProps } from './Uno';
import { BaseComponentDriver } from 'testing-base';

export class UnoDriver extends BaseComponentDriver {
    private props: Partial<UnoProps> = {};

    constructor() {
        super('Uno');
    }

    when: any = {
        rendered: () => {
            render(<Uno {...(this.props as UnoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Uno {...(this.props as UnoProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UnoProps>) => {
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
