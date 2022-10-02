import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Articles, ArticlesProps } from './Articles';
import { BaseComponentDriver } from 'testing-base';

export class ArticlesDriver extends BaseComponentDriver {
    private props: Partial<ArticlesProps> = {
    };

    constructor() {
        super('Articles');
    }

    when: any = {
        rendered: () => {
            render(<Articles {...(this.props as ArticlesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Articles {...(this.props as ArticlesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ArticlesProps>) => {
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
