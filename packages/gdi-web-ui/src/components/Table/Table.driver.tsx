import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Table, TableProps } from './Table';
import { BaseComponentDriver } from 'testing-base';

export class TableDriver extends BaseComponentDriver {
    private props: Partial<TableProps> = {};

    constructor() {
        super('Table');
    }

    when: any = {
        rendered: () => {
            render(<Table {...(this.props as TableProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TableProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
