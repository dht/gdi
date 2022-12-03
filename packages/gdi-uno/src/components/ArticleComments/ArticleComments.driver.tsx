import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArticleComments, ArticleCommentsProps } from './ArticleComments';
import { BaseComponentDriver } from 'testing-base';

export class ArticleCommentsDriver extends BaseComponentDriver {
    private props: Partial<ArticleCommentsProps> = {};

    constructor() {
        super('ArticleComments');
    }

    when: any = {
        rendered: () => {
            render(
                <ArticleComments {...(this.props as ArticleCommentsProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ArticleComments {...(this.props as ArticleCommentsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ArticleCommentsProps>) => {
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
