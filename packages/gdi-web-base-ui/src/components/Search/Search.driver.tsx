import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Search, SearchProps } from './Search';
import { BaseComponentDriver } from 'testing-base';

export class SearchDriver extends BaseComponentDriver {
    private props: Partial<SearchProps> = {};

    constructor() {
        super('Search');
    }

    when: any = {
        rendered: () => {
            render(<Search {...(this.props as SearchProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Search {...(this.props as SearchProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SearchProps>) => {
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
