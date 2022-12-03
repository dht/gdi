import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TicketsTable, TicketsTableProps } from './TicketsTable';
import { BaseComponentDriver } from 'testing-base';

export class TicketsTableDriver extends BaseComponentDriver {
    private props: Partial<TicketsTableProps> = {};

    constructor() {
        super('TicketsTable');
    }

    when: any = {
        rendered: () => {
            render(<TicketsTable {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TicketsTableProps>) => {
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
