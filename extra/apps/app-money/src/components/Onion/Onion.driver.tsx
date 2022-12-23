import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Onion, OnionProps } from './Onion';
import { BaseComponentDriver } from 'testing-base';

export class OnionDriver extends BaseComponentDriver {
    private props: Partial<OnionProps> = {};

    constructor() {
        super('Onion');
    }

    when: any = {
        rendered: () => {
            render(<Onion {...(this.props as OnionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Onion {...(this.props as OnionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<OnionProps>) => {
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
