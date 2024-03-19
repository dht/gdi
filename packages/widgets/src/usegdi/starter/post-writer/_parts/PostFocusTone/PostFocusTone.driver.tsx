import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostFocusTone, PostFocusToneProps } from './PostFocusTone';
import { BaseComponentDriver } from 'testing-base';

export class PostFocusToneDriver extends BaseComponentDriver {
    private props: Partial<PostFocusToneProps> = {};

    constructor() {
        super('PostFocusTone');
    }

    when: any = {
        rendered: () => {
            render(<PostFocusTone {...(this.props as PostFocusToneProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostFocusTone {...(this.props as PostFocusToneProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostFocusToneProps>) => {
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
