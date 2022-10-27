import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewCoupon, PreviewCouponProps } from './PreviewCoupon';
import { BaseComponentDriver } from 'testing-base';

export class PreviewCouponDriver extends BaseComponentDriver {
    private props: Partial<PreviewCouponProps> = {
    };

    constructor() {
        super('PreviewCoupon');
    }

    when: any = {
        rendered: () => {
            render(<PreviewCoupon {...(this.props as PreviewCouponProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewCoupon {...(this.props as PreviewCouponProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewCouponProps>) => {
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
