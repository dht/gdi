import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FilterAuto, FilterAutoProps } from './FilterAuto';
import { BaseComponentDriver } from 'testing-base';

export class FilterAutoDriver extends BaseComponentDriver {
    private props: Partial<FilterAutoProps> = {};

    constructor() {
        super('FilterAuto');
    }

    when: any = {
        rendered: () => {
            render(<FilterAuto {...(this.props as FilterAutoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <FilterAuto {...(this.props as FilterAutoProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<FilterAutoProps>) => {
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
