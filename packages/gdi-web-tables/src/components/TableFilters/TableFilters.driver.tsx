import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableFilters, TableFiltersProps } from './TableFilters';
import { BaseComponentDriver } from 'testing-base';

export class TableFiltersDriver extends BaseComponentDriver {
    private props: Partial<TableFiltersProps> = {};

    constructor() {
        super('TableFilters');
    }

    when: any = {
        rendered: () => {
            render(<TableFilters {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TableFiltersProps>) => {
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
