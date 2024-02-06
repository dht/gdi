import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StoreListing, StoreListingProps } from './StoreListing';
import { BaseComponentDriver } from 'testing-base';

export class StoreListingDriver extends BaseComponentDriver {
    private props: Partial<StoreListingProps> = {};

    constructor() {
        super('StoreListing');
    }

    when: any = {
        rendered: () => {
            render(<StoreListing {...(this.props as StoreListingProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<StoreListing {...(this.props as StoreListingProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<StoreListingProps>) => {
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
