import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ApiPage, ApiPageProps } from './ApiPage';
import { BaseComponentDriver } from 'testing-base';

export class ApiPageDriver extends BaseComponentDriver {
    private props: Partial<ApiPageProps> = {};

    constructor() {
        super('ApiPage');
    }

    when: any = {
        rendered: () => {
            render(<ApiPage {...(this.props as ApiPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ApiPage {...(this.props as ApiPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ApiPageProps>) => {
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
