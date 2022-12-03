import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HeroArticle, HeroArticleProps } from './HeroArticle';
import { BaseComponentDriver } from 'testing-base';

export class HeroArticleDriver extends BaseComponentDriver {
    private props: Partial<HeroArticleProps> = {};

    constructor() {
        super('HeroArticle');
    }

    when: any = {
        rendered: () => {
            render(<HeroArticle {...(this.props as HeroArticleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <HeroArticle {...(this.props as HeroArticleProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<HeroArticleProps>) => {
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
