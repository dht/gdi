import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArticleEditor, ArticleEditorProps } from './ArticleEditor';
import { BaseComponentDriver } from 'testing-base';

export class ArticleEditorDriver extends BaseComponentDriver {
    private props: Partial<ArticleEditorProps> = {};

    constructor() {
        super('ArticleEditor');
    }

    when: any = {
        rendered: () => {
            render(<ArticleEditor {...(this.props as ArticleEditorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ArticleEditor {...(this.props as ArticleEditorProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ArticleEditorProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        wrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
