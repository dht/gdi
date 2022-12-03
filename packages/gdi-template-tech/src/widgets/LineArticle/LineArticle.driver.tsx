import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LineArticle, LineArticleProps } from './LineArticle';
import { BaseComponentDriver } from 'testing-base';

export class LineArticleDriver extends BaseComponentDriver {
    private props: Partial<LineArticleProps> = {};

    constructor() {
        super('LineArticle');
    }

    when: any = {
        rendered: () => {
            render(<LineArticle {...(this.props as LineArticleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <LineArticle {...(this.props as LineArticleProps)} />
            );
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
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
