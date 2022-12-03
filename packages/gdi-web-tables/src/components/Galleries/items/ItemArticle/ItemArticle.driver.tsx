import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemArticle, ItemArticleProps } from './ItemArticle';
import { BaseComponentDriver } from 'testing-base';

export class ItemArticleDriver extends BaseComponentDriver {
    private props: Partial<ItemArticleProps> = {};

    constructor() {
        super('ItemArticle');
    }

    when: any = {
        rendered: () => {
            render(<ItemArticle {...(this.props as ItemArticleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemArticle {...(this.props as ItemArticleProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemArticleProps>) => {
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
