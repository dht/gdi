import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Carts, CartsProps } from './Carts';
import { BaseComponentDriver } from 'testing-base';

export class CartsDriver extends BaseComponentDriver {
    private props: Partial<CartsProps> = {};

    constructor() {
        super('Carts');
    }

    when: any = {
        rendered: () => {
            render(<Carts {...(this.props as CartsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Carts {...(this.props as CartsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CartsProps>) => {
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
