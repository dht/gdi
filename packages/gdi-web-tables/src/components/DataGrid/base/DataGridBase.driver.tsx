import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DataGridBase, DataGridBaseProps } from './DataGridBase';
import { BaseComponentDriver } from 'testing-base';

export class DataGridBaseDriver extends BaseComponentDriver {
    private props: Partial<DataGridBaseProps> = {};

    constructor() {
        super('DataGridBase');
    }

    when: any = {
        rendered: () => {
            render(<DataGridBase {...(this.props as DataGridBaseProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<DataGridBaseProps>) => {
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
