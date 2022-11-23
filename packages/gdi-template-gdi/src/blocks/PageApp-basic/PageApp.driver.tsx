import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageApp, PageAppProps } from './PageApp';
import { BaseComponentDriver } from 'testing-base';

export class PageAppDriver extends BaseComponentDriver {
    private props: Partial<PageAppProps> = {
    };

    constructor() {
        super('PageApp');
    }

    when: any = {
        rendered: () => {
            render(<PageApp {...(this.props as PageAppProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PageApp {...(this.props as PageAppProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PageAppProps>) => {
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
