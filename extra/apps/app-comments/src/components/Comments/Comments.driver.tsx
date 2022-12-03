import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Comments, CommentsProps } from './Comments';
import { BaseComponentDriver } from 'testing-base';

export class CommentsDriver extends BaseComponentDriver {
    private props: Partial<CommentsProps> = {};

    constructor() {
        super('Comments');
    }

    when: any = {
        rendered: () => {
            render(<Comments {...(this.props as CommentsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Comments {...(this.props as CommentsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<CommentsProps>) => {
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
