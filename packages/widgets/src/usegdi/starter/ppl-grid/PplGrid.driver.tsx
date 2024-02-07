import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PplGrid, PplGridProps } from './PplGrid';
import { BaseComponentDriver } from 'testing-base';

export class PplGridDriver extends BaseComponentDriver {
    private props: Partial<PplGridProps> = {};

    constructor() {
        super('PplGrid');
    }

    when: any = {
        rendered: () => {
            render(<PplGrid {...(this.props as PplGridProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PplGrid {...(this.props as PplGridProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PplGridProps>) => {
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
