import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemPageInstance, ItemPageInstanceProps } from './ItemPageInstance';
import { BaseComponentDriver } from 'testing-base';

export class ItemPageInstanceDriver extends BaseComponentDriver {
    private props: Partial<ItemPageInstanceProps> = {};

    constructor() {
        super('ItemPageInstance');
    }

    when: any = {
        rendered: () => {
            render(
                <ItemPageInstance {...(this.props as ItemPageInstanceProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemPageInstance {...(this.props as ItemPageInstanceProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemPageInstanceProps>) => {
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
