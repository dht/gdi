import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Houston, HoustonProps } from './Houston';
import { BaseComponentDriver } from 'testing-base';

export class HoustonDriver extends BaseComponentDriver {
    private props: Partial<HoustonProps> = {};

    constructor() {
        super('Houston');
    }

    when: any = {
        rendered: () => {
            render(<Houston {...(this.props as HoustonProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Houston {...(this.props as HoustonProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HoustonProps>) => {
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
