import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemLine, ItemLineProps } from './ItemLine';
import { BaseComponentDriver } from 'testing-base';

export class ItemLineDriver extends BaseComponentDriver {
    private props: Partial<ItemLineProps> = {};

    constructor() {
        super('ItemLine');
    }

    when: any = {
        rendered: () => {
            render(<ItemLine {...(this.props as ItemLineProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ItemLine {...(this.props as ItemLineProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ItemLineProps>) => {
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
