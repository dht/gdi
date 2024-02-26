import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HistoryPage, HistoryPageProps } from './HistoryPage';
import { BaseComponentDriver } from 'testing-base';

export class HistoryPageDriver extends BaseComponentDriver {
    private props: Partial<HistoryPageProps> = {};

    constructor() {
        super('HistoryPage');
    }

    when: any = {
        rendered: () => {
            render(<HistoryPage {...(this.props as HistoryPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<HistoryPage {...(this.props as HistoryPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HistoryPageProps>) => {
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
