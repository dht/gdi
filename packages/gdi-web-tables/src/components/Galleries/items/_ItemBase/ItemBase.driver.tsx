import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemBase, ItemBaseProps } from './ItemBase';
import { BaseComponentDriver } from 'testing-base';

export class ItemBaseDriver extends BaseComponentDriver {
    private props: Partial<ItemBaseProps> = {};

    constructor() {
        super('ItemBase');
    }

    when: any = {
        rendered: () => {
            render(<ItemBase {...(this.props as ItemBaseProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemBase {...(this.props as ItemBaseProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemBaseProps>) => {
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
