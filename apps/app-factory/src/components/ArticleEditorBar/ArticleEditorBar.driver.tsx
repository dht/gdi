import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArticleEditorBar, ArticleEditorBarProps } from './ArticleEditorBar';
import { BaseComponentDriver } from 'testing-base';

export class ArticleEditorBarDriver extends BaseComponentDriver {
    private props: Partial<ArticleEditorBarProps> = {};

    constructor() {
        super('ArticleEditorBar');
    }

    when: any = {
        rendered: () => {
            render(
                <ArticleEditorBar {...(this.props as ArticleEditorBarProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ArticleEditorBar {...(this.props as ArticleEditorBarProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ArticleEditorBarProps>) => {
            this.props = props;
            return this;
        },
    };
    wrapperClassName;

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
