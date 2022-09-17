import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableRow, TableRowProps } from './TableRow';
import { BaseComponentDriver } from 'testing-base';

export class TableRowDriver extends BaseComponentDriver {
    private props: Partial<TableRowProps> = {
    };

    constructor() {
        super('TableRow');
    }

    when: any = {
        rendered: () => {
            render(<TableRow {...(this.props as TableRowProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TableRow {...(this.props as TableRowProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TableRowProps>) => {
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
