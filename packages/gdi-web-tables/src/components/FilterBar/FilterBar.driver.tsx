import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FilterBar, FilterBarProps } from './FilterBar';
import { BaseComponentDriver } from 'testing-base';

export class FilterBarDriver extends BaseComponentDriver {
    private props: Partial<FilterBarProps> = {
    };

    constructor() {
        super('FilterBar');
    }

    when: any = {
        rendered: () => {
            render(<FilterBar {...(this.props as FilterBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FilterBar {...(this.props as FilterBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FilterBarProps>) => {
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
