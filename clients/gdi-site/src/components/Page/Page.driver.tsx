import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Page, PageProps } from './Page';
import { BaseComponentDriver } from 'testing-base';

export class PageDriver extends BaseComponentDriver {
    private props: Partial<PageProps> = {};

    constructor() {
        super('Page');
    }

    when: any = {
        rendered: () => {
            render(<Page {...(this.props as PageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Page {...(this.props as PageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PageProps>) => {
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
