import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Root, RootProps } from './Root';
import { BaseComponentDriver } from 'testing-base';

export class RootDriver extends BaseComponentDriver {
    private props: Partial<RootProps> = {};

    constructor() {
        super('Root');
    }

    when: any = {
        rendered: () => {
            render(<Root {...(this.props as RootProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Root {...(this.props as RootProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RootProps>) => {
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
