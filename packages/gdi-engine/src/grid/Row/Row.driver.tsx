import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Row, RowProps } from './Row';
import { BaseComponentDriver } from 'testing-base';

export class RowDriver extends BaseComponentDriver {
    private props: Partial<RowProps> = {};

    constructor() {
        super('Row');
    }

    when: any = {
        rendered: () => {
            render(<Row {...(this.props as RowProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Row {...(this.props as RowProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RowProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
