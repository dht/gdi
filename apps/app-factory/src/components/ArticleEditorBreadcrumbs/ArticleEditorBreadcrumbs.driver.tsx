import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArticleEditorBreadcrumbs, ArticleEditorBreadcrumbsProps } from './ArticleEditorBreadcrumbs';
import { BaseComponentDriver } from 'testing-base';

export class ArticleEditorBreadcrumbsDriver extends BaseComponentDriver {
    private props: Partial<ArticleEditorBreadcrumbsProps> = {
    };

    constructor() {
        super('ArticleEditorBreadcrumbs');
    }

    when: any = {
        rendered: () => {
            render(<ArticleEditorBreadcrumbs {...(this.props as ArticleEditorBreadcrumbsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ArticleEditorBreadcrumbs {...(this.props as ArticleEditorBreadcrumbsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ArticleEditorBreadcrumbsProps>) => {
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
