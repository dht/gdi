import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableBase, TableBaseProps } from './TableBase';
import { BaseComponentDriver } from 'testing-base';

export class TableBaseDriver extends BaseComponentDriver {
    private props: Partial<TableBaseProps> = {
    };

    constructor() {
        super('TableBase');
    }

    when: any = {
        rendered: () => {
            render(<TableBase {...(this.props as TableBaseProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TableBase {...(this.props as TableBaseProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TableBaseProps>) => {
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
