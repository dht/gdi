import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LineArticle, LineArticleProps } from './LineArticle';
import { BaseComponentDriver } from 'testing-base';

export class LineArticleDriver extends BaseComponentDriver {
    private props: Partial<LineArticleProps> = {
    };

    constructor() {
        super('LineArticle');
    }

    when: any = {
        rendered: () => {
            render(<LineArticle {...(this.props as LineArticleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LineArticle {...(this.props as LineArticleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LineArticleProps>) => {
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
