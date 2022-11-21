import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArticleHeader, ArticleHeaderProps } from './ArticleHeader';
import { BaseComponentDriver } from 'testing-base';

export class ArticleHeaderDriver extends BaseComponentDriver {
    private props: Partial<ArticleHeaderProps> = {
    };

    constructor() {
        super('ArticleHeader');
    }

    when: any = {
        rendered: () => {
            render(<ArticleHeader {...(this.props as ArticleHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ArticleHeader {...(this.props as ArticleHeaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ArticleHeaderProps>) => {
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
