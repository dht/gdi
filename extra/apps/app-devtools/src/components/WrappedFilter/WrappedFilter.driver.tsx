import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WrappedFilter, WrappedFilterProps } from './WrappedFilter';
import { BaseComponentDriver } from 'testing-base';

export class WrappedFilterDriver extends BaseComponentDriver {
    private props: Partial<WrappedFilterProps> = {};

    constructor() {
        super('WrappedFilter');
    }

    when: any = {
        rendered: () => {
            render(<WrappedFilter {...(this.props as WrappedFilterProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <WrappedFilter {...(this.props as WrappedFilterProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<WrappedFilterProps>) => {
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
