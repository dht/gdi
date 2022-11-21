import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BkGrid, BkGridProps } from './BkGrid';
import { BaseComponentDriver } from 'testing-base';

export class BkGridDriver extends BaseComponentDriver {
    private props: Partial<BkGridProps> = {
    };

    constructor() {
        super('BkGrid');
    }

    when: any = {
        rendered: () => {
            render(<BkGrid {...(this.props as BkGridProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BkGrid {...(this.props as BkGridProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BkGridProps>) => {
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
