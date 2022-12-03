import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemCart, ItemCartProps } from './ItemCart';
import { BaseComponentDriver } from 'testing-base';

export class ItemCartDriver extends BaseComponentDriver {
    private props: Partial<ItemCartProps> = {};

    constructor() {
        super('ItemCart');
    }

    when: any = {
        rendered: () => {
            render(<ItemCart {...(this.props as ItemCartProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemCart {...(this.props as ItemCartProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemCartProps>) => {
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
