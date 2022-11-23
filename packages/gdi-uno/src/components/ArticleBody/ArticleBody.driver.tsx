import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArticleBody, ArticleBodyProps } from './ArticleBody';
import { BaseComponentDriver } from 'testing-base';

export class ArticleBodyDriver extends BaseComponentDriver {
    private props: Partial<ArticleBodyProps> = {
    };

    constructor() {
        super('ArticleBody');
    }

    when: any = {
        rendered: () => {
            render(<ArticleBody {...(this.props as ArticleBodyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ArticleBody {...(this.props as ArticleBodyProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ArticleBodyProps>) => {
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
