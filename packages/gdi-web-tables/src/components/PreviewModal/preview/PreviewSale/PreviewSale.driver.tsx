import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewSale, PreviewSaleProps } from './PreviewSale';
import { BaseComponentDriver } from 'testing-base';

export class PreviewSaleDriver extends BaseComponentDriver {
    private props: Partial<PreviewSaleProps> = {};

    constructor() {
        super('PreviewSale');
    }

    when: any = {
        rendered: () => {
            render(<PreviewSale {...(this.props as PreviewSaleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewSale {...(this.props as PreviewSaleProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewSaleProps>) => {
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
