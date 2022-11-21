import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LargeArticle, LargeArticleProps } from './LargeArticle';
import { BaseComponentDriver } from 'testing-base';

export class LargeArticleDriver extends BaseComponentDriver {
    private props: Partial<LargeArticleProps> = {
    };

    constructor() {
        super('LargeArticle');
    }

    when: any = {
        rendered: () => {
            render(<LargeArticle {...(this.props as LargeArticleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LargeArticle {...(this.props as LargeArticleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LargeArticleProps>) => {
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
