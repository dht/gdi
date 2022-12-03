import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Orders, OrdersProps } from './Orders';
import { BaseComponentDriver } from 'testing-base';

export class OrdersDriver extends BaseComponentDriver {
    private props: Partial<OrdersProps> = {};

    constructor() {
        super('Orders');
    }

    when: any = {
        rendered: () => {
            render(<Orders {...(this.props as OrdersProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Orders {...(this.props as OrdersProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<OrdersProps>) => {
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
