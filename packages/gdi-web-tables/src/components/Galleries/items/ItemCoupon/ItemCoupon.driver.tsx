import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemCoupon, ItemCouponProps } from './ItemCoupon';
import { BaseComponentDriver } from 'testing-base';

export class ItemCouponDriver extends BaseComponentDriver {
    private props: Partial<ItemCouponProps> = {
    };

    constructor() {
        super('ItemCoupon');
    }

    when: any = {
        rendered: () => {
            render(<ItemCoupon {...(this.props as ItemCouponProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ItemCoupon {...(this.props as ItemCouponProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ItemCouponProps>) => {
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
