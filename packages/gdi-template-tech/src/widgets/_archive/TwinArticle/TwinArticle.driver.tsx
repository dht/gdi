import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TwinArticle, TwinArticleProps } from './TwinArticle';
import { BaseComponentDriver } from 'testing-base';

export class TwinArticleDriver extends BaseComponentDriver {
    private props: Partial<TwinArticleProps> = {
    };

    constructor() {
        super('TwinArticle');
    }

    when: any = {
        rendered: () => {
            render(<TwinArticle {...(this.props as TwinArticleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TwinArticle {...(this.props as TwinArticleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TwinArticleProps>) => {
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
