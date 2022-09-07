import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Layout, LayoutProps } from './Layout';
import { BaseComponentDriver } from 'testing-base';

export class LayoutDriver extends BaseComponentDriver {
    private props: Partial<LayoutProps> = {
    };

    constructor() {
        super('Layout');
    }

    when: any = {
        rendered: () => {
            render(<Layout {...(this.props as LayoutProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Layout {...(this.props as LayoutProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LayoutProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
