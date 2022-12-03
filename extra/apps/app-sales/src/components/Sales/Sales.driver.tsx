import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sales, SalesProps } from './Sales';
import { BaseComponentDriver } from 'testing-base';

export class SalesDriver extends BaseComponentDriver {
    private props: Partial<SalesProps> = {};

    constructor() {
        super('Sales');
    }

    when: any = {
        rendered: () => {
            render(<Sales {...(this.props as SalesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Sales {...(this.props as SalesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SalesProps>) => {
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
