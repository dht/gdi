import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LayoutGrid, LayoutGridProps } from './LayoutGrid';
import { BaseComponentDriver } from 'testing-base';

export class LayoutGridDriver extends BaseComponentDriver {
    private props: Partial<LayoutGridProps> = {
    };

    constructor() {
        super('LayoutGrid');
    }

    when: any = {
        rendered: () => {
            render(<LayoutGrid {...(this.props as LayoutGridProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LayoutGrid {...(this.props as LayoutGridProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LayoutGridProps>) => {
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
