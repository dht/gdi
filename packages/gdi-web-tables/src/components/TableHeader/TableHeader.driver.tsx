import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableHeader, TableHeaderProps } from './TableHeader';
import { BaseComponentDriver } from 'testing-base';

export class TableHeaderDriver extends BaseComponentDriver {
    private props: Partial<TableHeaderProps> = {};

    constructor() {
        super('TableHeader');
    }

    when: any = {
        rendered: () => {
            render(<TableHeader {...(this.props as TableHeaderProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TableHeaderProps>) => {
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
