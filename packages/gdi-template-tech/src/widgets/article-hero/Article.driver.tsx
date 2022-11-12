import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Article, ArticleProps } from './Article';
import { BaseComponentDriver } from 'testing-base';

export class ArticleDriver extends BaseComponentDriver {
    private props: Partial<ArticleProps> = {};

    constructor() {
        super('Article');
    }

    when: any = {
        rendered: () => {
            render(<Article {...(this.props as ArticleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Article {...(this.props as ArticleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ArticleProps>) => {
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
