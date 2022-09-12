import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableTop, TableTopProps } from './TableTop';
import { BaseComponentDriver } from 'testing-base';

export class TableTopDriver extends BaseComponentDriver {
    private props: Partial<TableTopProps> = {};

    constructor() {
        super('TableTop');
    }

    when: any = {
        rendered: () => {
            render(<TableTop {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TableTopProps>) => {
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
