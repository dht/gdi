import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DataGrid, DataGridProps } from './DataGrid';
import { BaseComponentDriver } from 'testing-base';

export class DataGridDriver extends BaseComponentDriver {
    private props: Partial<DataGridProps> = {};

    constructor() {
        super('DataGrid');
    }

    when: any = {
        rendered: () => {
            render(<DataGrid {...(this.props as DataGridProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<DataGridProps>) => {
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
