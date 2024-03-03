import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { History, HistoryProps } from './History';
import { BaseComponentDriver } from 'testing-base';

export class HistoryDriver extends BaseComponentDriver {
    private props: Partial<HistoryProps> = {};

    constructor() {
        super('History');
    }

    when: any = {
        rendered: () => {
            render(<History {...(this.props as HistoryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<History {...(this.props as HistoryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HistoryProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
