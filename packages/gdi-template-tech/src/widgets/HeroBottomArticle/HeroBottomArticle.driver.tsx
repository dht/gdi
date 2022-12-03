import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HeroBottomArticle, HeroBottomArticleProps } from './HeroBottomArticle';
import { BaseComponentDriver } from 'testing-base';

export class HeroBottomArticleDriver extends BaseComponentDriver {
    private props: Partial<HeroBottomArticleProps> = {};

    constructor() {
        super('HeroBottomArticle');
    }

    when: any = {
        rendered: () => {
            render(
                <HeroBottomArticle
                    {...(this.props as HeroBottomArticleProps)}
                />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <HeroBottomArticle
                    {...(this.props as HeroBottomArticleProps)}
                />
            );
        },
    };

    given: any = {
        props: (props: Partial<HeroBottomArticleProps>) => {
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
