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
            fireEvent.click(this.container);
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
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
