import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostFocusActions, PostFocusActionsProps } from './PostFocusActions';
import { BaseComponentDriver } from 'testing-base';

export class PostFocusActionsDriver extends BaseComponentDriver {
    private props: Partial<PostFocusActionsProps> = {};

    constructor() {
        super('PostFocusActions');
    }

    when: any = {
        rendered: () => {
            render(<PostFocusActions {...(this.props as PostFocusActionsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostFocusActions {...(this.props as PostFocusActionsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostFocusActionsProps>) => {
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
