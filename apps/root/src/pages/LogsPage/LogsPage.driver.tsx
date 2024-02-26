import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogsPage, LogsPageProps } from './LogsPage';
import { BaseComponentDriver } from 'testing-base';

export class LogsPageDriver extends BaseComponentDriver {
    private props: Partial<LogsPageProps> = {};

    constructor() {
        super('LogsPage');
    }

    when: any = {
        rendered: () => {
            render(<LogsPage {...(this.props as LogsPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LogsPage {...(this.props as LogsPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LogsPageProps>) => {
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
