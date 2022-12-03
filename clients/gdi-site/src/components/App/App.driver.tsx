import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { App, AppProps } from './App';
import { BaseComponentDriver } from 'testing-base';

export class AppDriver extends BaseComponentDriver {
    private props: Partial<AppProps> = {};

    constructor() {
        super('App');
    }

    when: any = {
        rendered: () => {
            render(<App {...(this.props as AppProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<App {...(this.props as AppProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AppProps>) => {
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
