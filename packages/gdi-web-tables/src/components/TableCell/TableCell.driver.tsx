import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableCell, TableCellProps } from './TableCell';
import { BaseComponentDriver } from 'testing-base';

export class TableCellDriver extends BaseComponentDriver {
    private props: Partial<TableCellProps> = {};

    constructor() {
        super('TableCell');
    }

    when: any = {
        rendered: () => {
            render(<TableCell {...(this.props as TableCellProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TableCellProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
