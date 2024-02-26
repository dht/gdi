import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RootPage, RootPageProps } from './RootPage';
import { BaseComponentDriver } from 'testing-base';

export class RootPageDriver extends BaseComponentDriver {
    private props: Partial<RootPageProps> = {};

    constructor() {
        super('RootPage');
    }

    when: any = {
        rendered: () => {
            render(<RootPage {...(this.props as RootPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<RootPage {...(this.props as RootPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RootPageProps>) => {
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
