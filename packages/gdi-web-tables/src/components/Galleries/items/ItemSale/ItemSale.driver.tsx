import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemSale, ItemSaleProps } from './ItemSale';
import { BaseComponentDriver } from 'testing-base';

export class ItemSaleDriver extends BaseComponentDriver {
    private props: Partial<ItemSaleProps> = {};

    constructor() {
        super('ItemSale');
    }

    when: any = {
        rendered: () => {
            render(<ItemSale {...(this.props as ItemSaleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemSale {...(this.props as ItemSaleProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemSaleProps>) => {
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
