import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableRowActions, TableRowActionsProps } from './TableRowActions';
import { BaseComponentDriver } from 'testing-base';

export class TableRowActionsDriver extends BaseComponentDriver {
    private props: Partial<TableRowActionsProps> = {
    };

    constructor() {
        super('TableRowActions');
    }

    when: any = {
        rendered: () => {
            render(<TableRowActions {...(this.props as TableRowActionsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TableRowActions {...(this.props as TableRowActionsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TableRowActionsProps>) => {
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
