import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemProduct, ItemProductProps } from './ItemProduct';
import { BaseComponentDriver } from 'testing-base';

export class ItemProductDriver extends BaseComponentDriver {
    private props: Partial<ItemProductProps> = {};

    constructor() {
        super('ItemProduct');
    }

    when: any = {
        rendered: () => {
            render(<ItemProduct {...(this.props as ItemProductProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemProduct {...(this.props as ItemProductProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemProductProps>) => {
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
