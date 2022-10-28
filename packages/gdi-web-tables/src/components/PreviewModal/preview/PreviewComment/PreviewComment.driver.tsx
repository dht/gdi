import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewComment, PreviewCommentProps } from './PreviewComment';
import { BaseComponentDriver } from 'testing-base';

export class PreviewCommentDriver extends BaseComponentDriver {
    private props: Partial<PreviewCommentProps> = {
    };

    constructor() {
        super('PreviewComment');
    }

    when: any = {
        rendered: () => {
            render(<PreviewComment {...(this.props as PreviewCommentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewComment {...(this.props as PreviewCommentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewCommentProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
