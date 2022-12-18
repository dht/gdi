import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Reader, ReaderProps } from './Reader';
import { BaseComponentDriver } from 'testing-base';

export class ReaderDriver extends BaseComponentDriver {
    private props: Partial<ReaderProps> = {};

    constructor() {
        super('Reader');
    }

    when: any = {
        rendered: () => {
            render(<Reader {...(this.props as ReaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Reader {...(this.props as ReaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ReaderProps>) => {
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
