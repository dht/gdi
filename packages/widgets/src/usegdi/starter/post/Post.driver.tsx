import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Post, PostProps } from './Post';
import { BaseComponentDriver } from 'testing-base';

export class PostDriver extends BaseComponentDriver {
    private props: Partial<PostProps> = {};

    constructor() {
        super('Post');
    }

    when: any = {
        rendered: () => {
            render(<Post {...(this.props as PostProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Post {...(this.props as PostProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
