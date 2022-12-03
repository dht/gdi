import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Column, ColumnProps } from './Column';
import { BaseComponentDriver } from 'testing-base';

export class ColumnDriver extends BaseComponentDriver {
    private props: Partial<ColumnProps> = {};

    constructor() {
        super('Column');
    }

    when: any = {
        rendered: () => {
            render(<Column {...(this.props as ColumnProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Column {...(this.props as ColumnProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ColumnProps>) => {
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
