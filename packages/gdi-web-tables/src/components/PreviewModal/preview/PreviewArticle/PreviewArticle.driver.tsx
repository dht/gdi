import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewArticle, PreviewArticleProps } from './PreviewArticle';
import { BaseComponentDriver } from 'testing-base';

export class PreviewArticleDriver extends BaseComponentDriver {
    private props: Partial<PreviewArticleProps> = {
    };

    constructor() {
        super('PreviewArticle');
    }

    when: any = {
        rendered: () => {
            render(<PreviewArticle {...(this.props as PreviewArticleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewArticle {...(this.props as PreviewArticleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewArticleProps>) => {
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
