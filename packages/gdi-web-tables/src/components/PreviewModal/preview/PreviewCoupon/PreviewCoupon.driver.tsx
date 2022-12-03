import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewCoupon, PreviewCouponProps } from './PreviewCoupon';
import { BaseComponentDriver } from 'testing-base';

export class PreviewCouponDriver extends BaseComponentDriver {
    private props: Partial<PreviewCouponProps> = {};

    constructor() {
        super('PreviewCoupon');
    }

    when: any = {
        rendered: () => {
            render(<PreviewCoupon {...(this.props as PreviewCouponProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewCoupon {...(this.props as PreviewCouponProps)} />
            );
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
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
