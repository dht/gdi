import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PriceTag, PriceTagProps } from './PriceTag';
import { BaseComponentDriver } from 'testing-base';

export class PriceTagDriver extends BaseComponentDriver {
    private props: Partial<PriceTagProps> = {};

    constructor() {
        super('PriceTag');
    }

    when: any = {
        rendered: () => {
            render(<PriceTag {...(this.props as PriceTagProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PriceTag {...(this.props as PriceTagProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PriceTagProps>) => {
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
