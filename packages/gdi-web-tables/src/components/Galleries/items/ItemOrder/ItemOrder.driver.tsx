import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemOrder, ItemOrderProps } from './ItemOrder';
import { BaseComponentDriver } from 'testing-base';

export class ItemOrderDriver extends BaseComponentDriver {
    private props: Partial<ItemOrderProps> = {
    };

    constructor() {
        super('ItemOrder');
    }

    when: any = {
        rendered: () => {
            render(<ItemOrder {...(this.props as ItemOrderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ItemOrder {...(this.props as ItemOrderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ItemOrderProps>) => {
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
