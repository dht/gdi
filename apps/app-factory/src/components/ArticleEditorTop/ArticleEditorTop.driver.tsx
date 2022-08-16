import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArticleEditorTop, ArticleEditorTopProps } from './ArticleEditorTop';
import { BaseComponentDriver } from 'testing-base';

export class ArticleEditorTopDriver extends BaseComponentDriver {
    private props: Partial<ArticleEditorTopProps> = {
    };

    constructor() {
        super('ArticleEditorTop');
    }

    when: any = {
        rendered: () => {
            render(<ArticleEditorTop {...(this.props as ArticleEditorTopProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ArticleEditorTop {...(this.props as ArticleEditorTopProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ArticleEditorTopProps>) => {
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
