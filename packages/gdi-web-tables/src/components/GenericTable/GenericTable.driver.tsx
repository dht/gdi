import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GenericTable, GenericTableProps } from './GenericTable';
import { BaseComponentDriver } from 'testing-base';

export class GenericTableDriver extends BaseComponentDriver {
    private props: Partial<GenericTableProps> = {};

    constructor() {
        super('GenericTable');
    }

    when: any = {
        rendered: () => {
            render(<GenericTable {...(this.props as GenericTableProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <GenericTable {...(this.props as GenericTableProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<GenericTableProps>) => {
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
