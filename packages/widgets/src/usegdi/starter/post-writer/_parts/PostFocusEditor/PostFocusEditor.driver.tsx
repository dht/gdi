import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostFocusEditor, PostFocusEditorProps } from './PostFocusEditor';
import { BaseComponentDriver } from 'testing-base';

export class PostFocusEditorDriver extends BaseComponentDriver {
    private props: Partial<PostFocusEditorProps> = {};

    constructor() {
        super('PostFocusEditor');
    }

    when: any = {
        rendered: () => {
            render(<PostFocusEditor {...(this.props as PostFocusEditorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostFocusEditor {...(this.props as PostFocusEditorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostFocusEditorProps>) => {
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
