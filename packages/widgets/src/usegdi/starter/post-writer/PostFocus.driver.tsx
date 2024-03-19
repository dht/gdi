import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostFocus, PostFocusProps } from './PostFocus';
import { BaseComponentDriver } from 'testing-base';

export class PostFocusDriver extends BaseComponentDriver {
    private props: Partial<PostFocusProps> = {};

    constructor() {
        super('PostFocus');
    }

    when: any = {
        rendered: () => {
            render(<PostFocus {...(this.props as PostFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostFocus {...(this.props as PostFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostFocusProps>) => {
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
