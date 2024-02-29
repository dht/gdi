import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DataPage, DataPageProps } from './DataPage';
import { BaseComponentDriver } from 'testing-base';

export class DataPageDriver extends BaseComponentDriver {
    private props: Partial<DataPageProps> = {};

    constructor() {
        super('DataPage');
    }

    when: any = {
        rendered: () => {
            render(<DataPage {...(this.props as DataPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DataPage {...(this.props as DataPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DataPageProps>) => {
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
