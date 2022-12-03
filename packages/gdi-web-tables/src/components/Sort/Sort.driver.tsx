import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sort, SortProps } from './Sort';
import { BaseComponentDriver } from 'testing-base';

export class SortDriver extends BaseComponentDriver {
    private props: Partial<SortProps> = {};

    constructor() {
        super('Sort');
    }

    when: any = {
        rendered: () => {
            render(<Sort {...(this.props as SortProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Sort {...(this.props as SortProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SortProps>) => {
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
