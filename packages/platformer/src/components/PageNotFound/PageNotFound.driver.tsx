import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageNotFound, PageNotFoundProps } from './PageNotFound';
import { BaseComponentDriver } from 'testing-base';

export class PageNotFoundDriver extends BaseComponentDriver {
    private props: Partial<PageNotFoundProps> = {};

    constructor() {
        super('PageNotFound');
    }

    when: any = {
        rendered: () => {
            render(<PageNotFound {...(this.props as PageNotFoundProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PageNotFound {...(this.props as PageNotFoundProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PageNotFoundProps>) => {
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
