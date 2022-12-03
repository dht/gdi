import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Products, ProductsProps } from './Products';
import { BaseComponentDriver } from 'testing-base';

export class ProductsDriver extends BaseComponentDriver {
    private props: Partial<ProductsProps> = {};

    constructor() {
        super('Products');
    }

    when: any = {
        rendered: () => {
            render(<Products {...(this.props as ProductsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Products {...(this.props as ProductsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ProductsProps>) => {
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
