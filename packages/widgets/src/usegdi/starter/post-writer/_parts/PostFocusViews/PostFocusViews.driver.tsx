import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostFocusViews, PostFocusViewsProps } from './PostFocusViews';
import { BaseComponentDriver } from 'testing-base';

export class PostFocusViewsDriver extends BaseComponentDriver {
    private props: Partial<PostFocusViewsProps> = {};

    constructor() {
        super('PostFocusViews');
    }

    when: any = {
        rendered: () => {
            render(<PostFocusViews {...(this.props as PostFocusViewsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostFocusViews {...(this.props as PostFocusViewsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostFocusViewsProps>) => {
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
