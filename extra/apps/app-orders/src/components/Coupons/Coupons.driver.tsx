import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Coupons, CouponsProps } from './Coupons';
import { BaseComponentDriver } from 'testing-base';

export class CouponsDriver extends BaseComponentDriver {
    private props: Partial<CouponsProps> = {};

    constructor() {
        super('Coupons');
    }

    when: any = {
        rendered: () => {
            render(<Coupons {...(this.props as CouponsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Coupons {...(this.props as CouponsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CouponsProps>) => {
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
