import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageBlog, PageBlogProps } from './PageBlog';
import { BaseComponentDriver } from 'testing-base';

export class PageBlogDriver extends BaseComponentDriver {
    private props: Partial<PageBlogProps> = {};

    constructor() {
        super('PageBlog');
    }

    when: any = {
        rendered: () => {
            render(<PageBlog {...(this.props as PageBlogProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PageBlog {...(this.props as PageBlogProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PageBlogProps>) => {
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
